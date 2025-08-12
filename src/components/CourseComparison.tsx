import { useCourseContext } from '@/context/CourseContext';
import { useCoursesData } from '@/hooks/useCourses';
import { Course } from '@/types/course';
import { Card} from '@/components/card';
import { Button } from '@/components/button';
import { Badge } from '@/components/badge';
import { X, Star} from 'lucide-react';
import { Header } from '@/components/Header';

export const CourseComparison = () => {
  const { state, removeFromComparison, clearComparison } = useCourseContext();
  const { data } = useCoursesData();
  const courses = data?.courses ?? [];
  
  const comparisonCourses = (courses as Course[]).filter(course => 
    state.comparison.includes(course.id)
  );

  if (state.comparison.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Course Comparison
              </h1>
              <p className="text-muted-foreground">
                Compare courses side by side
              </p>
            </div>
          </div>
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Star className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No courses to compare</h3>
              <p className="text-muted-foreground mb-6">
                Add courses to comparison from the course catalog to see them here.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Course Comparison
            </h1>
            <p className="text-muted-foreground">
              Compare {comparisonCourses.length} course{comparisonCourses.length !== 1 ? 's' : ''} side by side
            </p>
          </div>
          
          <Button
            variant="outline"
            onClick={clearComparison}
            className="flex items-center gap-2"
          >
          <X className="h-4 w-4" />
          Clear All
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {comparisonCourses.map((course) => (
          <Card key={course.id} className="w-64 min-w-0 bg-card-gradient shadow-card border-0 p-2 relative card-shadow-glow">
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 h-7 w-7 p-0 bg-background/80 hover:bg-background/90 backdrop-blur-sm z-10"
              onClick={() => removeFromComparison(course.id)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="aspect-video relative overflow-hidden rounded-lg mb-2">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between mb-1">
              <Badge variant="category" className="bg-primary/10 text-primary">
                {course.category}
              </Badge>
              <Badge variant="difficulty">{course.difficulty}</Badge>
            </div>
            <div className="font-semibold text-sm line-clamp-2 mb-1">{course.title}</div>
            <div className="text-xs text-muted-foreground mb-1">by {course.instructor}</div>
            <div className="flex items-center gap-1 text-xs">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
              <span className="text-muted-foreground">({course.reviewCount})</span>
            </div>
          </Card>
        ))}
      </div>

      {comparisonCourses.length >= 2 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-[#181825] rounded-2xl shadow-2xl border border-gray-400 dark:border-gray-700">
            <thead>
              <tr className="border-b border-gray-400 dark:border-gray-700">
                <th className="py-3 px-4 text-left text-base font-bold text-primary bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary border-r border-gray-400 dark:border-gray-700 rounded-tl-2xl">Attribute</th>
                {comparisonCourses.slice(0, 2).map((course, idx) => (
                  <th key={course.id} className={`py-3 px-4 text-left text-base font-semibold text-foreground bg-muted ${idx < comparisonCourses.length - 1 ? 'border-r border-gray-400 dark:border-gray-700' : ''} ${idx === comparisonCourses.length - 1 ? 'rounded-tr-2xl' : ''}`}>
                    {course.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Level', key: 'difficulty' },
                { label: 'Category', key: 'category' },
                { label: 'Price', key: 'price', format: (v) => `R${v}` },
                { label: 'Original Price', key: 'originalPrice', format: (v) => v ? `R${v}` : '-' },
                { label: 'Rating', key: 'rating', format: (v, c) => `${c.rating} (${c.reviewCount})` },
                { label: 'Duration', key: 'duration' },
                { label: 'Students', key: 'enrollment', format: (v) => v.toLocaleString() },
                { label: 'Tags', key: 'tags', format: (v) => v.slice(0, 4).join(', ') },
                { label: 'Instructor', key: 'instructor' },
                { label: 'Description', key: 'description', className: 'text-xs text-muted-foreground' },
              ].map((row, rowIdx, arr) => (
                <tr
                  key={row.key}
                  className={`transition-colors ${rowIdx % 2 === 0 ? 'bg-gray-50 dark:bg-[#232946]' : 'bg-white dark:bg-[#181825]'} hover:bg-primary/10 dark:hover:bg-primary/20 ${rowIdx < arr.length - 1 ? 'border-b border-gray-400 dark:border-gray-700' : ''}`}
                >
                  <td className="py-2 px-4 font-semibold border-l-4 border-primary border-r border-gray-400 dark:border-gray-700 bg-gradient-to-r from-primary/10 to-transparent">{row.label}</td>
                  {comparisonCourses.slice(0, 2).map((course, idx) => (
                    <td
                      key={course.id + '-' + row.key}
                      className={`py-2 px-4 ${row.className || ''} ${idx < comparisonCourses.length - 1 ? 'border-r border-gray-400 dark:border-gray-700' : ''}`}
                    >
                      {row.format ? row.format(course[row.key], course) : course[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  );
};