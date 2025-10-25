import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  File,
  CheckCircle,
  X,
  FileText,
  Image,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  progress: number;
  file: File; // Store the actual File object for submission
}

export default function FileUploadSection() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState<string | null>(null); // Track which document type is being dragged over
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const documentTypes = [
    { name: 'Academic Transcripts', icon: FileText, key: 'transcripts' },
    { name: 'English Test Scores', icon: Award, key: 'testScores' },
    { name: 'Statement of Purpose', icon: FileText, key: 'sop' },
    {
      name: 'Letters of Recommendation',
      icon: FileText,
      key: 'recommendation',
    },
    { name: 'Resume/CV', icon: FileText, key: 'resume' },
    { name: 'Passport Copy', icon: Image, key: 'passport' },
  ];

  const handleDrag = (e: React.DragEvent, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(key);
    } else if (e.type === 'dragleave') {
      setDragActive(null);
    }
  };

  const handleDrop = (e: React.DragEvent, docKey: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(null);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files, docKey);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    docKey: string
  ) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files, docKey);
    }
  };

  const handleFiles = (files: FileList, docKey: string) => {
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
    ];

    Array.from(files).forEach(file => {
      if (file.size > maxFileSize) {
        setError(`File ${file.name} exceeds 10MB limit.`);
        return;
      }
      if (!allowedTypes.includes(file.type)) {
        setError(`File ${file.name} has an unsupported format.`);
        return;
      }

      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        type: file.type,
        status: 'pending',
        progress: 0,
        file,
      };

      setUploadedFiles(prev => {
        // Replace existing file for this docKey, if any
        const filtered = prev.filter(f => !f.name.includes(docKey));
        return [...filtered, { ...newFile, name: `${docKey}_${file.name}` }];
      });
      setError(null);
      setSuccess(null);
    });
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
    setError(null);
    setSuccess(null);
  };

  const handleSubmitAll = async () => {
    if (uploadedFiles.length === 0) {
      setError('No files to submit.');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      uploadedFiles.forEach(file => {
        formData.append('files', file.file, file.name);
      });

      const response = await axios.post('/api/upload-documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          if (progressEvent.total) {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadedFiles(prev =>
              prev.map(f => ({
                ...f,
                status: 'uploading',
                progress: Math.min(progress, 90),
              }))
            );
          }
        },
      });

      setUploadedFiles(prev =>
        prev.map(f => ({ ...f, status: 'completed', progress: 100 }))
      );
      setSuccess('All documents uploaded successfully!');
      setTimeout(() => {
        setUploadedFiles([]); // Clear files after successful submission
      }, 2000);
    } catch (err) {
      setUploadedFiles(prev =>
        prev.map(f => ({ ...f, status: 'error', progress: 0 }))
      );
      setError('Failed to upload documents. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Test function to add a dummy file
  const addTestFile = () => {
    const testFile: UploadedFile = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'transcripts_test.pdf',
      size: '2.5 MB',
      type: 'application/pdf',
      status: 'pending',
      progress: 0,
      file: new File([''], 'test.pdf', { type: 'application/pdf' }),
    };
    setUploadedFiles(prev => [...prev, testFile]);
  };

  return (
    <div className="space-y-6">
      {/* Debug Info */}
      <div className="flex items-center gap-4 text-sm text-gray-600 p-4 bg-gray-100 rounded">
        <div>Total files uploaded: {uploadedFiles.length}</div>
        <Button onClick={addTestFile} size="sm" variant="outline">
          Add Test File
        </Button>
        {uploadedFiles.length > 0 && (
          <div className="text-xs">
            Files: {uploadedFiles.map(f => f.name).join(', ')}
          </div>
        )}
      </div>

      {/* Feedback Messages */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-center"
        >
          {error}
        </motion.div>
      )}
      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-center"
        >
          {success}
        </motion.div>
      )}

      {/* Document Upload Sections */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
              <FileText className="h-5 w-5 text-white" />
            </div>
            Upload Documents
          </CardTitle>
          <CardDescription>
            Upload each document by dragging and dropping or clicking to browse.
            All uploads are optional.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {documentTypes.map((doc, index) => {
              const Icon = doc.icon;
              const uploadedFile = uploadedFiles.find(f =>
                f.name.includes(doc.key)
              );

              return (
                <motion.div
                  key={doc.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-gray-400" />
                    <p className="font-medium text-sm">{doc.name}</p>
                    {uploadedFile && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center transition-all ${
                      dragActive === doc.key
                        ? 'border-blue-400 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/30'
                    }`}
                    onDragEnter={e => handleDrag(e, doc.key)}
                    onDragLeave={e => handleDrag(e, doc.key)}
                    onDragOver={e => handleDrag(e, doc.key)}
                    onDrop={e => handleDrop(e, doc.key)}
                  >
                    <input
                      type="file"
                      multiple={false}
                      onChange={e => handleChange(e, doc.key)}
                      className="hidden"
                      id={`file-upload-${doc.key}`}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      ref={el => (fileInputRefs.current[doc.key] = el)}
                    />
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-700">
                      Drop {doc.name} here, or{' '}
                      <label
                        htmlFor={`file-upload-${doc.key}`}
                        className="text-blue-600 cursor-pointer hover:underline"
                      >
                        browse
                      </label>
                    </p>
                    <p className="text-xs text-gray-500">
                      Supports: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                  {uploadedFile && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-gray-700 font-medium truncate">
                            {uploadedFile.name.replace(`${doc.key}_`, '')}
                          </p>
                          <p className="text-xs text-gray-500">{uploadedFile.size}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(uploadedFile.id)}
                        className="flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files Summary */}
      {uploadedFiles.length > 0 && (
        <Card className="border-green-200 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <File className="h-5 w-5 text-white" />
              </div>
              Uploaded Files ({uploadedFiles.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {uploadedFiles.map(file => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 p-3 border rounded-lg bg-white"
                >
                  <div className="flex-shrink-0">
                    {file.status === 'completed' ? (
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    ) : file.status === 'error' ? (
                      <X className="h-8 w-8 text-red-500" />
                    ) : (
                      <File className="h-8 w-8 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">
                        {file.name.split('_').slice(1).join('_')}
                      </p>
                      {file.status === 'pending' && (
                        <Badge variant="secondary" className="text-xs">
                          Ready
                        </Badge>
                      )}
                      {file.status === 'uploading' && (
                        <Badge variant="default" className="text-xs bg-blue-500">
                          Uploading {file.progress}%
                        </Badge>
                      )}
                      {file.status === 'completed' && (
                        <Badge variant="default" className="text-xs bg-green-500">
                          Uploaded
                        </Badge>
                      )}
                      {file.status === 'error' && (
                        <Badge variant="destructive" className="text-xs">
                          Failed
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{file.size}</p>
                    {file.status === 'uploading' && (
                      <Progress value={file.progress} className="mt-2 h-2" />
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(file.id)}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                onClick={handleSubmitAll}
                disabled={isSubmitting || uploadedFiles.length === 0}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit All Documents'}
                <Upload className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
