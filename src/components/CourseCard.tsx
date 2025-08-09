import { Course } from '@/types/course';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Star, Clock, Users, Heart, BarChart3, Play, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '@/context/CourseContext';
import { toast } from '@/hooks/use-toast';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toggleFavorite, addToComparison, isFavorite, isInComparison } = useCourseContext();

  const handleCardClick = () => {
    navigate(`/course/${course.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const wasFavorite = isFavorite(course.id);
    toggleFavorite(course.id);
    toast({
      title: wasFavorite ? "Removed from favorites" : "Added to favorites",
      duration: 2000,
    });
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInComparison(course.id)) {
      toast({
        title: "Course already in comparison",
        description: "This course is already added to comparison list.",
        variant: "destructive",
        duration: 2000,
      });
    } else {
      addToComparison(course.id);
      toast({
        title: "Added to comparison",
        description: "Course added to comparison list.",
        duration: 2000,
      });
    }
  };

  const discountPercentage = course.originalPrice 
    ? Math.round((1 - course.price / course.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0">
      <div className="relative" onClick={handleCardClick}>
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img
            src={course.imageUrl}
            alt={course.title}
            className={`w-full h-full transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }${(course.id === 2 || course.id === "2" || course.id === 9 || course.id === "9") ? ' object-bottom' : ' object-cover'}`}
            style={course.id === 12 || course.id === "12" ? { objectPosition: "center 25%" } : {}}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
        </div>
        
        <div className="absolute top-3 right-3 flex gap-2">
          {/* Favorite button: no gradient, original style */}
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
            onClick={handleFavoriteClick}
          >
            <Heart className={`h-4 w-4 ${isFavorite(course.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
          </Button>
          
          {/* Compare button: no gradient, original style */}
          <Button
            size="sm"
            variant="ghost"
            className={`h-8 w-8 p-0 backdrop-blur-sm ${
              isInComparison(course.id) 
                ? 'bg-primary/20 hover:bg-primary/30' 
                : 'bg-background/80 hover:bg-background/90'
            }`}
            onClick={handleCompareClick}
          >
            <BarChart3 className={`h-4 w-4 ${
              isInComparison(course.id) ? 'text-primary' : 'text-muted-foreground'
            }`} />
          </Button>
        </div>
        
  <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="category" className="bg-background/90 backdrop-blur-sm">
            {course.category}
          </Badge>
          {discountPercentage > 0 && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="p-4" onClick={handleCardClick}>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="difficulty">{course.difficulty}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
            <span>({course.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {course.description}
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-0" onClick={handleCardClick}>
        <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.enrollment.toLocaleString()}</span>
          </div>
        </div>

        {course.isEnrolled && course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">
                {course.completedLessons}/{course.totalLessons} lessons
              </span>
            </div>
            <Progress value={course.progress} className="h-2 mb-2" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{course.progress}% complete</span>
              {course.progress === 100 && (
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-3 w-3" />
                  <span>Completed</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-1">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between" onClick={handleCardClick}>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-card-foreground">R{course.price}</span>
          {course.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R{course.originalPrice}
            </span>
          )}
        </div>
        
        {/* Main button with subtle purple gradient */}
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-purple-700 to-indigo-600 hover:brightness-110 text-white flex items-center gap-2 transition"
        >
          {course.isEnrolled ? (
            course.progress === 100 ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Completed
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Continue
              </>
            )
          ) : (
            'Enroll Now'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
