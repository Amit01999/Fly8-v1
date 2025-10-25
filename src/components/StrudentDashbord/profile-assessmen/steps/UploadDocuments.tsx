import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, CheckCircle2, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import type { DocumentsData, UploadedDocument } from '@/types/profileAssessment';
import { getUploadedDocuments, deleteDocument } from '@/services/operations/studentProfileAPI';
import UploadedDocumentItem, { UploadedDocumentItemSkeleton } from '../UploadedDocumentItem';

interface UploadDocumentsProps {
  data: DocumentsData;
  onChange: (field: keyof DocumentsData, value: File | null) => void;
  disabled?: boolean;
  onDocumentsUpdate?: () => void;
}

interface DocumentFieldConfig {
  key: keyof DocumentsData;
  label: string;
  description: string;
  required: boolean;
}

const DOCUMENT_FIELDS: DocumentFieldConfig[] = [
  {
    key: 'transcripts',
    label: 'Academic Transcripts',
    description: 'Upload your official academic transcripts',
    required: false,
  },
  {
    key: 'testScores',
    label: 'Test Scores',
    description: 'IELTS, TOEFL, GRE, or other standardized test scores',
    required: false,
  },
  {
    key: 'sop',
    label: 'Statement of Purpose',
    description: 'Your personal statement or SOP',
    required: false,
  },
  {
    key: 'recommendation',
    label: 'Recommendation Letters',
    description: 'Letters of recommendation from professors or employers',
    required: false,
  },
  {
    key: 'resume',
    label: 'Resume/CV',
    description: 'Your current resume or curriculum vitae',
    required: false,
  },
  {
    key: 'passport',
    label: 'Passport Copy',
    description: 'A clear copy of your passport',
    required: false,
  },
];

export default function UploadDocuments({
  data,
  onChange,
  disabled = false,
  onDocumentsUpdate,
}: UploadDocumentsProps) {
  const dispatch = useDispatch();
  const [draggedField, setDraggedField] = useState<keyof DocumentsData | null>(null);
  const [uploadedDocuments, setUploadedDocuments] = useState<UploadedDocument[]>([]);
  const [isLoadingDocuments, setIsLoadingDocuments] = useState(true);

  // Fetch existing documents on mount
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setIsLoadingDocuments(true);
        const documents = await getUploadedDocuments();
        setUploadedDocuments(documents);
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setIsLoadingDocuments(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleFileChange = (field: keyof DocumentsData, file: File | null) => {
    onChange(field, file);
  };

  const handleDragOver = (e: React.DragEvent, field: keyof DocumentsData) => {
    e.preventDefault();
    setDraggedField(field);
  };

  const handleDragLeave = () => {
    setDraggedField(null);
  };

  const handleDrop = (e: React.DragEvent, field: keyof DocumentsData) => {
    e.preventDefault();
    setDraggedField(null);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(field, file);
    }
  };

  const handleRemoveDocument = async (documentId: string) => {
    try {
      await dispatch(deleteDocument(documentId) as any);
      // Refresh the documents list
      const documents = await getUploadedDocuments();
      setUploadedDocuments(documents);
      toast.success('Document removed successfully');
      // Notify parent component to update progress
      onDocumentsUpdate?.();
    } catch (error) {
      console.error('Error removing document:', error);
    }
  };

  const handleReupload = (documentType: string) => {
    // Trigger file input for the specific document type
    const fileInput = document.getElementById(documentType) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handlePreview = (document: UploadedDocument) => {
    // Open document in new tab
    window.open(document.url, '_blank');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Get uploaded document for a specific field
  const getUploadedDocForField = (fieldKey: keyof DocumentsData) => {
    return uploadedDocuments.find(doc => doc.type === fieldKey);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
              <Upload className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Upload Documents</CardTitle>
              <CardDescription>
                Add your documents (optional - you can skip this step)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Document upload is optional. You can skip this
              step and upload documents later from your profile settings.
            </p>
          </div>

          {/* Existing Uploaded Documents */}
          {isLoadingDocuments ? (
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-semibold text-gray-700">Previously Uploaded Documents</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3].map((i) => (
                  <UploadedDocumentItemSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : uploadedDocuments.length > 0 ? (
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-semibold text-gray-700">Previously Uploaded Documents</h3>
              <AnimatePresence>
                <div className="grid md:grid-cols-2 gap-4">
                  {uploadedDocuments.map((doc) => (
                    <UploadedDocumentItem
                      key={doc.id}
                      document={doc}
                      onRemove={handleRemoveDocument}
                      onReupload={handleReupload}
                      onPreview={handlePreview}
                      disabled={disabled}
                    />
                  ))}
                </div>
              </AnimatePresence>
            </div>
          ) : null}

          {/* Upload New Documents */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">
              {uploadedDocuments.length > 0 ? 'Upload Additional Documents' : 'Upload Documents'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {DOCUMENT_FIELDS.map(field => {
                const file = data[field.key];
                const isDragging = draggedField === field.key;
                const existingDoc = getUploadedDocForField(field.key);

                return (
                  <div key={field.key} className="space-y-2">
                    <Label>
                      {field.label}
                      {field.required && <span className="text-red-500"> *</span>}
                      {existingDoc && (
                        <span className="ml-2 text-xs text-green-600">(Already uploaded)</span>
                      )}
                    </Label>
                    <p className="text-xs text-gray-500 mb-2">{field.description}</p>

                    <div
                      className={`
                        relative border-2 border-dashed rounded-lg p-6
                        transition-all duration-200
                        ${isDragging
                          ? 'border-blue-500 bg-blue-50'
                          : existingDoc
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                        }
                        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      `}
                      onDragOver={e => !disabled && handleDragOver(e, field.key)}
                      onDragLeave={handleDragLeave}
                      onDrop={e => !disabled && handleDrop(e, field.key)}
                    >
                      <input
                        type="file"
                        id={field.key}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={e => {
                          const selectedFile = e.target.files?.[0] || null;
                          handleFileChange(field.key, selectedFile);
                        }}
                        disabled={disabled}
                      />

                      {file ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={e => {
                              e.stopPropagation();
                              handleFileChange(field.key, null);
                            }}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                            disabled={disabled}
                          >
                            <X className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {existingDoc ? 'Replace existing document' : 'Drag & drop or click to upload'}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            PDF, DOC, DOCX, JPG, PNG (max 10MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
