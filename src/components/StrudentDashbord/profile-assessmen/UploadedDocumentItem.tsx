import { motion } from 'framer-motion';
import { FileText, X, Download, Eye, RefreshCw, File } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { UploadedDocument } from '@/types/profileAssessment';

interface UploadedDocumentItemProps {
  document: UploadedDocument;
  onRemove?: (documentId: string) => void;
  onReupload?: (documentType: string) => void;
  onPreview?: (document: UploadedDocument) => void;
  disabled?: boolean;
}

export default function UploadedDocumentItem({
  document,
  onRemove,
  onReupload,
  onPreview,
  disabled = false,
}: UploadedDocumentItemProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getFileIcon = () => {
    const extension = document.name.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return <FileText className="h-8 w-8 text-red-500" />;
      case 'doc':
      case 'docx':
        return <FileText className="h-8 w-8 text-blue-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <File className="h-8 w-8 text-green-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <Card className="bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* File Icon */}
            <div className="p-3 bg-gray-50 rounded-xl flex-shrink-0">
              {getFileIcon()}
            </div>

            {/* File Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 truncate mb-1">
                {document.name}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{formatFileSize(document.size)}</span>
                <span>•</span>
                <span>Uploaded {formatDate(document.uploadedAt)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Preview Button */}
              {onPreview && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onPreview(document)}
                  disabled={disabled}
                  className="h-9 w-9 p-0 hover:bg-blue-50 hover:text-blue-600"
                  title="Preview document"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              )}

              {/* Download Button */}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  // Open document URL in new tab to download
                  window.open(document.url, '_blank');
                }}
                disabled={disabled}
                className="h-9 w-9 p-0 hover:bg-green-50 hover:text-green-600"
                title="Download document"
              >
                <Download className="h-4 w-4" />
              </Button>

              {/* Reupload Button */}
              {onReupload && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onReupload(document.type)}
                  disabled={disabled}
                  className="h-9 w-9 p-0 hover:bg-yellow-50 hover:text-yellow-600"
                  title="Replace document"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              )}

              {/* Remove Button */}
              {onRemove && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to remove ${document.name}?`)) {
                      onRemove(document.id);
                    }
                  }}
                  disabled={disabled}
                  className="h-9 w-9 p-0 hover:bg-red-50 hover:text-red-600"
                  title="Remove document"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Progress Indicator (optional - for upload in progress) */}
          {/* You can add upload progress here if needed */}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Loading Skeleton Component
export function UploadedDocumentItemSkeleton() {
  return (
    <Card className="bg-white border-2 border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-4 animate-pulse">
          <div className="p-3 bg-gray-100 rounded-xl flex-shrink-0">
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 bg-gray-200 rounded"></div>
            <div className="h-9 w-9 bg-gray-200 rounded"></div>
            <div className="h-9 w-9 bg-gray-200 rounded"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
