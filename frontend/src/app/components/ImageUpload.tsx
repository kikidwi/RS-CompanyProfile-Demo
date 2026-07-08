import { useState, useRef } from "react";
import { Upload, X, Link as LinkIcon, Image as ImageIcon } from "lucide-react";
import { uploadImage, API_BASE_URL } from "../../lib/api";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  folder: string;
  label?: string;
  hint?: string;
}

/**
 * Reusable image upload component.
 * Supports file upload (drag & drop or file picker) and manual URL input.
 * Uploads file to /api/upload and returns the stored URL.
 */
export default function ImageUpload({ value, onChange, folder, label = "Gambar", hint }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      setError("Format file tidak didukung. Gunakan JPG, PNG, WebP, atau GIF.");
      return;
    }

    // Validate file size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError("Ukuran file maksimal 2MB.");
      return;
    }

    setError("");
    setUploading(true);

    try {
      const url = await uploadImage(file, folder);
      onChange(url);
    } catch (err: any) {
      console.error("Upload failed:", err);
      const message = err?.response?.data?.message || "Gagal mengupload gambar.";
      setError(message);
    } finally {
      setUploading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleRemove = () => {
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getImageSrc = (url: string): string => {
    if (!url) return "";
    if (url.startsWith("/storage")) {
      return `${API_BASE_URL}${url}`;
    }
    // Fix for incorrect APP_URL in Laravel returning http://localhost/storage/... without port
    if (url.startsWith("http://localhost/storage") || url.startsWith("https://localhost/storage")) {
      return url.replace(/^https?:\/\/localhost(\/storage.*)/, `${API_BASE_URL}$1`);
    }
    return url;
  };

  const [imgError, setImgError] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {hint && <p className="text-xs text-gray-500">{hint}</p>}

      {/* Preview */}
      {value && (
        <div className="relative inline-block group">
          <div className="relative w-full max-w-sm border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all group-hover:border-[#006370]">
            {imgError ? (
              <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-4 text-center">
                <ImageIcon size={32} className="mb-2 opacity-50" />
                <p className="text-sm font-medium">Gambar tidak ditemukan atau rusak</p>
                <p className="text-xs mt-1">Silakan ganti dengan gambar baru</p>
              </div>
            ) : (
              <img
                src={getImageSrc(value)}
                alt="Preview"
                className="w-full h-auto max-h-56 object-contain"
                onError={() => setImgError(true)}
                onLoad={() => setImgError(false)}
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <button
                type="button"
                onClick={handleRemove}
                className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg hover:bg-gray-50 hover:scale-105 transition-all"
              >
                <Upload size={16} />
                Ganti Gambar
              </button>
            </div>
          </div>
          
          <button
            type="button"
            onClick={handleRemove}
            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-all shadow-md md:hidden"
            title="Hapus gambar"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Upload Area */}
      {!value && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
            isDragOver
              ? "border-[#006370] bg-[#006370]/5"
              : "border-gray-300 hover:border-[#006370] hover:bg-gray-50"
          } ${uploading ? "opacity-50 pointer-events-none" : ""}`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
            onChange={handleInputChange}
            className="hidden"
          />

          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#006370] border-t-transparent"></div>
              <p className="text-sm text-gray-500 font-medium">Mengupload...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <Upload size={20} className="text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Klik atau seret gambar ke sini
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  JPG, PNG, WebP, GIF • Maks 2MB
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* URL Input Toggle */}
      {!value && (
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="inline-flex items-center gap-1.5 text-xs text-[#006370] hover:text-[#004e58] font-medium transition-colors"
          >
            <LinkIcon size={12} />
            {showUrlInput ? "Sembunyikan input URL" : "Atau gunakan link URL"}
          </button>

          {showUrlInput && (
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/gambar.jpg"
                className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370] focus:border-transparent"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const input = e.currentTarget;
                    if (input.value.trim()) {
                      onChange(input.value.trim());
                      setShowUrlInput(false);
                    }
                  }
                }}
              />
              <button
                type="button"
                onClick={(e) => {
                  const input = (e.currentTarget.previousElementSibling as HTMLInputElement);
                  if (input?.value?.trim()) {
                    onChange(input.value.trim());
                    setShowUrlInput(false);
                  }
                }}
                className="px-3 py-2 bg-[#006370] text-white text-sm rounded-md hover:bg-[#004e58] transition-colors"
              >
                Pakai
              </button>
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <ImageIcon size={14} />
          {error}
        </p>
      )}
    </div>
  );
}
