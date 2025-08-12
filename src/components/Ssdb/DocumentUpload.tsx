import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Document, apiService } from '@/services/studentdashboardapi';
import {
  Upload,
  FileText,
  Download,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
} from 'lucide-react';

interface DocumentUploadProps {
  studentId: string;
  documents: Document[];
  onUpload: () => void;
}

const documentTypes = [
  'Passport',
  'Birth Certificate',
  'Academic Transcripts',
  'Degree Certificate',
  'English Proficiency Test Results',
  'Statement of Purpose',
  'Letters of Recommendation',
  'CV/Resume',
  'Financial Documents',
  'Visa Documents',
  'Medical Certificate',
  'Other',
];

export const DocumentUpload = ({
  studentId,
  documents,
  onUpload,
}: DocumentUploadProps) => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!selectedType) {
      toast({
        title: 'Document Type Required',
        description: 'Please select a document type before uploading.',
        variant: 'destructive',
      });
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: 'File Too Large',
        description: 'File size must be less than 10MB.',
        variant: 'destructive',
      });
      return;
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/jpg',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: 'Invalid File Type',
        description:
          'Only PDF, DOC, DOCX, JPG, JPEG, and PNG files are allowed.',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);

    try {
      await apiService.uploadDocument(studentId, file, selectedType);
      toast({
        title: 'Document Uploaded',
        description: `${selectedType} has been uploaded successfully.`,
      });
      onUpload();
      setSelectedType('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      toast({
        title: 'Upload Failed',
        description: 'Failed to upload document. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (documentId: string) => {
    try {
      await apiService.deleteDocument(studentId, documentId);
      toast({
        title: 'Document Deleted',
        description: 'Document has been deleted successfully.',
      });
      onUpload();
    } catch (error) {
      toast({
        title: 'Delete Failed',
        description: 'Failed to delete document. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const getStatusIcon = (status: Document['status']) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'rejected':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-primary" />;
      default:
        return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: Document['status']) => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'rejected':
        return 'Rejected';
      case 'pending':
        return 'Under Review';
      default:
        return 'Uploaded';
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-success/5">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Upload className="h-5 w-5" />
          Document Upload
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Upload Section */}
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="documentType">Document Type *</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  {documentTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fileUpload">Upload File *</Label>
              <div className="flex gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  id="fileUpload"
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="hidden"
                  disabled={uploading}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading || !selectedType}
                  className="flex-1"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {uploading ? 'Uploading...' : 'Choose File'}
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>• Supported formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>
            <p>• Maximum file size: 10MB</p>
            <p>• Ensure documents are clear and readable</p>
          </div>
        </div>

        {/* Documents List */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Uploaded Documents</Label>

          {documents.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No documents uploaded yet</p>
              <p className="text-sm">
                Upload your required documents to complete your profile
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {documents.map(doc => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(doc.status)}
                    <div>
                      <p className="font-medium">{doc.type}</p>
                      <p className="text-sm text-muted-foreground">
                        {doc.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {getStatusText(doc.status)}
                        {doc.uploadedAt &&
                          ` • ${new Date(doc.uploadedAt).toLocaleDateString()}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {doc.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(doc.url, '_blank')}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => doc.id && handleDelete(doc.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Required Documents Checklist */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
          <Label className="text-base font-semibold mb-3 block">
            Required Documents Checklist
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {[
              'Passport',
              'Academic Transcripts',
              'English Proficiency Test Results',
              'Statement of Purpose',
            ].map(requiredDoc => {
              const isUploaded = documents.some(
                doc => doc.type === requiredDoc
              );
              return (
                <div key={requiredDoc} className="flex items-center gap-2">
                  {isUploaded ? (
                    <CheckCircle className="h-4 w-4 text-success" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span
                    className={
                      isUploaded ? 'text-success' : 'text-muted-foreground'
                    }
                  >
                    {requiredDoc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Circle = ({ className }: { className: string }) => (
  <div
    className={`rounded-full border-2 ${className}`}
    style={{ width: '16px', height: '16px' }}
  />
);
