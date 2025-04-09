
import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

export type FilterOptions = {
  search?: string;
  country?: string;
  courseType?: string;
  fieldOfStudy?: string;
  feesMin?: number;
  feesMax?: number;
  durationType?: string;
  level?: string;
};

type FilterBarProps = {
  onChange: (filters: FilterOptions) => void;
  countries: string[];
  fields: string[];
  levels: string[];
  initialFilters?: FilterOptions;
  showOnlySearch?: boolean;
};

const FilterBar = ({ 
  onChange, 
  countries, 
  fields, 
  levels, 
  initialFilters = {}, 
  showOnlySearch = false
}: FilterBarProps) => {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  
  useEffect(() => {
    onChange(filters);
    
    // Set active filter tags
    const tags: string[] = [];
    if (filters.country) tags.push(`Country: ${filters.country}`);
    if (filters.courseType) tags.push(`Type: ${filters.courseType}`);
    if (filters.fieldOfStudy) tags.push(`Field: ${filters.fieldOfStudy}`);
    if (filters.level) tags.push(`Level: ${filters.level}`);
    if (filters.feesMin !== undefined || filters.feesMax !== undefined) {
      tags.push(`Fees: $${filters.feesMin || 0} - $${filters.feesMax || 50000}+`);
    }
    setActiveTags(tags);
  }, [filters, onChange]);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(filters);
  };
  
  const clearFilter = (tag: string) => {
    const newFilters = { ...filters };
    
    if (tag.startsWith('Country:')) delete newFilters.country;
    if (tag.startsWith('Type:')) delete newFilters.courseType;
    if (tag.startsWith('Field:')) delete newFilters.fieldOfStudy;
    if (tag.startsWith('Level:')) delete newFilters.level;
    if (tag.startsWith('Fees:')) {
      delete newFilters.feesMin;
      delete newFilters.feesMax;
    }
    
    setFilters(newFilters);
  };
  
  const clearAll = () => {
    setFilters({ search: filters.search });
  };
  
  return (
    <div className="w-full mb-6">
      <form onSubmit={handleSearch} className="relative mb-4">
        <Input
          type="text"
          placeholder="Search courses, universities or keywords..."
          value={filters.search || ''}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="pr-16"
        />
        <Button 
          type="submit" 
          size="sm" 
          variant="ghost" 
          className="absolute right-1 top-1/2 transform -translate-y-1/2"
        >
          <Search className="h-5 w-5" />
        </Button>
      </form>
      
      {!showOnlySearch && (
        <>
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {activeTags.map((tag) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center"
                  >
                    {tag}
                    <button 
                      onClick={() => clearFilter(tag)}
                      className="ml-1 rounded-full hover:bg-primary/20 p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </motion.div>
                ))}
                
                {activeTags.length > 0 && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={clearAll}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear all
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <select 
                      value={filters.country || ''} 
                      onChange={(e) => setFilters({ ...filters, country: e.target.value || undefined })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">All Countries</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Field of Study</Label>
                    <select 
                      value={filters.fieldOfStudy || ''} 
                      onChange={(e) => setFilters({ ...filters, fieldOfStudy: e.target.value || undefined })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">All Fields</option>
                      {fields.map((field) => (
                        <option key={field} value={field}>{field}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Course Level</Label>
                    <select 
                      value={filters.level || ''} 
                      onChange={(e) => setFilters({ ...filters, level: e.target.value || undefined })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">All Levels</option>
                      {levels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Tuition Fee Range</Label>
                    <div className="pt-4 px-2">
                      <Slider
                        defaultValue={[filters.feesMin || 0, filters.feesMax || 50000]}
                        max={50000}
                        step={1000}
                        onValueChange={(value) => setFilters({ 
                          ...filters, 
                          feesMin: value[0], 
                          feesMax: value[1] 
                        })}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>${filters.feesMin || 0}</span>
                      <span>${filters.feesMax || 50000}+</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 flex justify-end">
                    <Button onClick={() => setIsOpen(false)}>
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterBar;
