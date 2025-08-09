import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Badge } from '@/components/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { Search, Filter, X } from 'lucide-react';
import { CourseFilters } from '@/types/course';


interface SearchAndFiltersProps {
  filters: CourseFilters;
  onFiltersChange: (filters: CourseFilters) => void;
  onClearFilters: () => void;
  categories: string[];
  difficulties: string[];
}

export const SearchAndFilters = ({ filters, onFiltersChange, onClearFilters, categories, difficulties }: SearchAndFiltersProps) => {
  const hasActiveFilters = filters.category !== 'All Categories' || 
                          filters.difficulty !== 'All Levels' || 
                          filters.search.length > 0;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg border">
      
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search courses..."
          value={filters.search}
          onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
          className="pl-10 focus:outline-black"
        />
      </div>

    
      <div className="min-w-[200px]">
        <Select
          value={filters.category}
          onValueChange={(value) => onFiltersChange({ ...filters, category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      
      <div className="min-w-[150px]">
        <Select
          value={filters.difficulty}
          onValueChange={(value) => onFiltersChange({ ...filters, difficulty: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((difficulty) => (
              <SelectItem key={difficulty} value={difficulty}>
                {difficulty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

     
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={onClearFilters}
          size="sm"
        >
          Clear
        </Button>
      )}
    </div>
  );
};