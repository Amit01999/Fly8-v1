import { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MultiSelectProps {
  label: string;
  options: readonly string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MultiSelect({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select options...',
  disabled = false,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const removeOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== option));
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-2" ref={dropdownRef}>
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="relative">
        {/* Selected values display */}
        <div
          className={cn(
            'min-h-[42px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm cursor-pointer transition-colors',
            'hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20',
            disabled && 'opacity-50 cursor-not-allowed bg-gray-50'
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <div className="flex flex-wrap gap-1.5 items-center">
            {value.length === 0 ? (
              <span className="text-gray-400">{placeholder}</span>
            ) : (
              value.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                >
                  {item}
                  {!disabled && (
                    <button
                      onClick={(e) => removeOption(item, e)}
                      className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </span>
              ))
            )}
            <ChevronDown
              className={cn(
                'w-4 h-4 text-gray-400 ml-auto transition-transform',
                isOpen && 'transform rotate-180'
              )}
            />
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
            {/* Search input */}
            <div className="p-2 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Options list */}
            <div className="overflow-y-auto max-h-48">
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">
                  No options found
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = value.includes(option);
                  return (
                    <div
                      key={option}
                      className={cn(
                        'px-3 py-2 text-sm cursor-pointer transition-colors flex items-center justify-between',
                        isSelected
                          ? 'bg-blue-50 text-blue-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      )}
                      onClick={() => toggleOption(option)}
                    >
                      <span>{option}</span>
                      {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  );
                })
              )}
            </div>

            {/* Select all / Clear all */}
            <div className="p-2 border-t border-gray-200 flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange([...options]);
                }}
                className="flex-1 h-8 text-xs"
              >
                Select All
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange([]);
                }}
                className="flex-1 h-8 text-xs"
              >
                Clear All
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Helper text */}
      <p className="text-xs text-gray-500">
        {value.length} {value.length === 1 ? 'country' : 'countries'} selected
      </p>
    </div>
  );
}
