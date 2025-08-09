import { useState } from 'react';
import { CourseCard } from '@/components/CourseCard';
import { SearchAndFilters } from '@/components/SearchAndFilters';
import { StatusFilters } from '@/components/StatusFilters';
import { Header } from '@/components/Header';
import { useCoursesData } from '@/hooks/useCourses';
import { CourseFilters } from '@/types/course';
import { Button } from '@/components/button';
import { SidebarTrigger } from '@/components/sidebar';
import { Grid, List, Filter, Loader2 } from 'lucide-react';

export const CourseCatalog = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<CourseFilters>({
    category: 'All Categories',
    difficulty: 'All Levels',
    search: '',
    status: 'All'
  });

  const { data, isLoading, error } = useCoursesData();
  const courses = data?.courses ?? [];
  const categories = data?.categories ?? [];
  const difficulties = data?.difficulties ?? [];

  // Local filtering logic
  const filteredCourses = courses.filter(course => {
    const matchesSearch =
      filters.search === '' ||
      course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
    const matchesCategory = filters.category === 'All Categories' || course.category === filters.category;
    const matchesDifficulty = filters.difficulty === 'All Levels' || course.difficulty === filters.difficulty;
    // Mock status filtering (in real app, this would be based on user enrollment data)
    const matchesStatus = !filters.status || filters.status === 'All' ||
      (filters.status === 'Active' && Math.random() > 0.3) ||
      (filters.status === 'Completed' && Math.random() > 0.8);
    return matchesSearch && matchesCategory && matchesDifficulty && matchesStatus;
  });

  const clearFilters = () => {
    setFilters({
      category: 'All Categories',
      difficulty: 'All Levels',
      search: '',
      status: 'All'
    });
  };

  const handleStatusChange = (status: string) => {
    setFilters(prev => ({ ...prev, status }));
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 dark:from-[#4f1d7a] dark:via-[#312e81] dark:to-[#1e3a8a] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <SidebarTrigger className="absolute left-4 top-4 text-white hover:bg-white/10" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Learn Without Limits
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                Discover thousands of courses from expert instructors and transform your career
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Learning Today
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-white/30 text-black dark:text-white hover:bg-white/10">
                  Browse Courses
                </Button>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Page Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Explore Courses
                  </h2>
                  {isLoading ? (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Loading courses...</span>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      {filteredCourses.length} courses found
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                  
                  <div className="flex border rounded-lg overflow-hidden bg-muted">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className={
                        "rounded-none transition-all duration-200" +
                        (viewMode === 'grid'
                          ? " bg-gradient-to-r from-purple-700 to-indigo-600 text-white border-0 shadow-md hover:from-purple-800 hover:to-indigo-700"
                          : "")
                      }
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className={
                        "rounded-none transition-all duration-200" +
                        (viewMode === 'list'
                          ? " bg-gradient-to-r from-purple-700 to-indigo-600 text-white border-0 shadow-md hover:from-purple-800 hover:to-indigo-700"
                          : "")
                      }
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="mb-6">
              <SearchAndFilters
                filters={filters}
                onFiltersChange={setFilters}
                onClearFilters={clearFilters}
                categories={categories}
                difficulties={difficulties}
              />
              </div>

              {/* Status Filters */}
              <StatusFilters
                activeStatus={filters.status}
                onStatusChange={handleStatusChange}
              />

              {/* Course Grid */}
              <div className="w-full">
                {error ? (
                  <div className="text-center py-12">
                    <p className="text-destructive text-lg mb-4">
                      Error loading courses. Please try again.
                    </p>
                    <Button onClick={() => window.location.reload()}>
                      Reload Page
                    </Button>
                  </div>
                ) : isLoading ? (
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="bg-card rounded-lg p-4 animate-pulse">
                        <div className="aspect-video bg-muted rounded mb-4"></div>
                        <div className="h-4 bg-muted rounded mb-2"></div>
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                ) : filteredCourses.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg mb-4">
                      No courses found matching your criteria
                    </p>
                    <Button onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                      : 'grid-cols-1'
                  }`}>
                    {filteredCourses.map((course) => (
                      <CourseCard
                        key={course.id}
                        course={course}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
    </>
  );
};
