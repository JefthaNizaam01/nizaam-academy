import { Header } from '@/components/Header';
import { CourseCard } from '@/components/CourseCard';
import { Button } from '@/components/button';
import { useCoursesData } from '@/hooks/useCourses';
import { useCourseContext } from '@/context/CourseContext';
import { Course } from '@/types/course';
import { Heart, ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Favorites = () => {
  const navigate = useNavigate();
  const { state } = useCourseContext();
  const { data, isLoading } = useCoursesData();
  const allCourses = data?.courses ?? [];

  const favoriteCourses = (allCourses as Course[]).filter(course => 
    state.favorites.includes(course.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold">Your Favorite Courses</h1>
          </div>
          <p className="text-muted-foreground">
            {state.favorites.length === 0 
              ? "You haven't added any courses to your favorites yet" 
              : `You have ${state.favorites.length} favorite course${state.favorites.length === 1 ? '' : 's'}`
            }
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading your favorites...</span>
          </div>
        ) : state.favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No favorites yet</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring courses and add them to your favorites by clicking the heart icon.
              </p>
              <Button onClick={() => navigate('/')}>
                Browse Courses
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {favoriteCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};