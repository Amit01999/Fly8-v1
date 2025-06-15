import { useState } from 'react';
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

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
  status: 'uploading' | 'completed' | 'error';
  progress: number;
}

export default function FileUploadSection() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const requiredDocuments = [
    { name: 'Academic Transcripts', icon: FileText, required: true },
    { name: 'English Test Scores', icon: Award, required: true },
    { name: 'Statement of Purpose', icon: FileText, required: true },
    { name: 'Letters of Recommendation', icon: FileText, required: false },
    { name: 'Resume/CV', icon: FileText, required: true },
    { name: 'Passport Copy', icon: Image, required: true },
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        type: file.type,
        status: 'uploading',
        progress: 0,
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadedFiles(prev =>
          prev.map(f =>
            f.id === newFile.id
              ? { ...f, progress: Math.min(f.progress + 10, 100) }
              : f
          )
        );
      }, 200);

      setTimeout(() => {
        clearInterval(interval);
        setUploadedFiles(prev =>
          prev.map(f =>
            f.id === newFile.id
              ? { ...f, status: 'completed', progress: 100 }
              : f
          )
        );
      }, 2000);
    });
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Required Documents Checklist */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
              <FileText className="h-5 w-5 text-white" />
            </div>
            Required Documents
          </CardTitle>
          <CardDescription>
            Please upload the following documents for a comprehensive assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {requiredDocuments.map((doc, index) => {
              const Icon = doc.icon;
              const isUploaded = uploadedFiles.some(f =>
                f.name
                  .toLowerCase()
                  .includes(doc.name.toLowerCase().split(' ')[0])
              );

              return (
                <motion.div
                  key={doc.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                    isUploaded
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isUploaded ? 'text-green-600' : 'text-gray-400'
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{doc.name}</p>
                    {doc.required && (
                      <Badge variant="secondary" className="text-xs mt-1">
                        Required
                      </Badge>
                    )}
                  </div>
                  {isUploaded && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
              <Upload className="h-5 w-5 text-white" />
            </div>
            Upload Documents
          </CardTitle>
          <CardDescription>
            Drag and drop your files or click to browse
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
              dragActive
                ? 'border-purple-400 bg-purple-50'
                : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/30'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleChange}
              className="hidden"
              id="file-upload"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-medium text-gray-700 mb-2">
              Drop your files here, or{' '}
              <label
                htmlFor="file-upload"
                className="text-purple-600 cursor-pointer hover:underline"
              >
                browse
              </label>
            </p>
            <p className="text-sm text-gray-500">
              Supports: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
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
                    ) : (
                      <File className="h-8 w-8 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{file.name}</p>
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
          </CardContent>
        </Card>
      )}
    </div>
  );
}
