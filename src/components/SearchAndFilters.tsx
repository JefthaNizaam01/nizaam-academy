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


  const displayCategories = categories.filter(cat => cat !== 'All Categories');

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search courses..."
            value={filters.search}
            onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
            className="pl-10 rounded-full border-2 focus:border-primary/50 transition-colors"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="min-w-[150px]">
            <Select
              value={filters.difficulty}
              onValueChange={(value) => onFiltersChange({ ...filters, difficulty: value })}
            >
              <SelectTrigger className="rounded-full">
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
          
   
          <div className="min-w-[150px] md:hidden">
            <Select
              value={filters.category}
              onValueChange={(value) => onFiltersChange({ ...filters, category: value })}
            >
              <SelectTrigger className="rounded-full">
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
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={onClearFilters}
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground rounded-full"
            >
              <X className="h-3 w-3 mr-1" />
              Clear all
            </Button>
          )}
        </div>
      </div>

 
      <div className="space-y-2 hidden md:block">
        <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
          {displayCategories.map((category) => (
            <Badge
              key={category}
              variant={filters.category === category ? "default" : "secondary"}
              className={`
                px-4 py-2 rounded-full cursor-pointer transition-all duration-200 text-sm whitespace-nowrap flex-shrink-0
                hover:scale-105 hover:shadow-md
                ${filters.category === category 
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg border-0' 
                  : 'bg-secondary/50 hover:bg-secondary text-secondary-foreground'
                }
              `}
              onClick={() => onFiltersChange({ 
                ...filters, 
                category: filters.category === category ? 'All Categories' : category 
              })}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};