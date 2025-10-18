import { useState, useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  currentImage?: string;
  onImageSelect: (file: File) => void;
  disabled?: boolean;
  maxSizeMB?: number;
}

export function ImageUpload({
  currentImage,
  onImageSelect,
  disabled = false,
  maxSizeMB = 5,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      alert(`Image size must be less than ${maxSizeMB}MB`);
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    onImageSelect(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

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
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const displayImage = preview || currentImage;

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Image preview */}
      <div className="relative group">
        <div
          className={cn(
            'w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg',
            'transition-all duration-300 group-hover:shadow-xl'
          )}
        >
          {displayImage ? (
            <img
              src={displayImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white" />
            </div>
          )}
        </div>

        {/* Overlay on hover */}
        {!disabled && (
          <div
            className={cn(
              'absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center',
              'opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
            )}
            onClick={() => inputRef.current?.click()}
          >
            <Upload className="w-8 h-8 text-white" />
          </div>
        )}

        {/* Remove button */}
        {preview && !disabled && (
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={handleRemove}
            className="absolute -top-2 -right-2 h-8 w-8 rounded-full p-0 shadow-lg"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Upload area */}
      <div
        className={cn(
          'w-full max-w-md relative border-2 border-dashed rounded-lg p-4 transition-colors',
          dragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        <div className="flex flex-col items-center justify-center text-center">
          <Camera className="w-8 h-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">
            <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 mt-1">
            JPG, PNG or GIF (Max {maxSizeMB}MB)
          </p>
        </div>
      </div>
    </div>
  );
}
