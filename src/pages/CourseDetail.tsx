import { useParams, useNavigate } from 'react-router-dom';
import { useCoursesData } from '@/hooks/useCourses';
import { Header } from '@/components/Header';
import { Button } from '@/components/button';
import { Badge } from '@/components/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Separator } from '@/components/separator';
import { 
  Star, 
  Clock, 
  Users, 
  Calendar,
  ArrowLeft,
  Play,
  Download,
  Award,
  Globe,
  Smartphone,
  Loader2
} from 'lucide-react';




import { useEffect } from 'react';

export const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useCoursesData();
  const course = data?.courses.find(c => c.id === courseId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading course details...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate('/')}>
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  const discountPercentage = course?.originalPrice 
    ? Math.round((1 - course.price / course.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <Header />


      <section className="bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {course.category}
                </Badge>
                <Badge variant="difficulty" className="bg-white/20 text-white border-0">
                  {course.difficulty}
                </Badge>
                {discountPercentage > 0 && (
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {discountPercentage}% OFF
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>

              <p className="text-xl text-white/90 mb-6">{course.description}</p>

              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-5 w-5" />
                  <span>{course.enrollment.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-5 w-5" />
                  <span>Updated {course.lastUpdated}</span>
                </div>
              </div>

              <p className="text-white/80 mt-4">
                Created by <span className="font-medium">{course.instructor}</span>
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

    
          <div className="lg:col-span-2 space-y-8">
        
            <Card>
              <CardHeader>
                <CardTitle>What you'll learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Master the fundamentals and advanced concepts",
                    "Build real-world projects from scratch",
                    "Best practices and industry standards",
                    "Portfolio-ready projects",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

     
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <p className="text-muted-foreground">
                  {course.duration} total • 8 sections • 45 lectures
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((section) => (
                    <div key={section} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">
                        Section {section}: Getting Started
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        3 lectures • 45 min
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Basic computer skills</li>
                  <li>• No prior experience required</li>
                  <li>• Willingness to learn</li>
                </ul>
              </CardContent>
            </Card>

      
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description} This comprehensive course will take you from beginner to advanced level,
                  covering all the essential concepts and practical applications. You'll work on real-world projects
                  and build a portfolio that will help you land your dream job.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold">R{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      R{course.originalPrice}
                    </span>
                  )}
                </div>

             
                <Button
                  className="w-full mb-4 text-lg py-6 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white"
                  size="lg"
                >
                  Enroll Now
                </Button>

                <Button
                  variant="outline"
                  className="w-full mb-6 border-blue-600 text-blue-700 hover:bg-blue-50"
                >
                  Add to Cart
                </Button>

                <div className="text-center text-sm text-muted-foreground mb-6">
                  30-Day Money-Back Guarantee
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h4 className="font-medium">This course includes:</h4>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="font-medium mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
