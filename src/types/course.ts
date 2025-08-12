export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  tags: string[];
  enrollment: number;
  lastUpdated: string;
  progress?: number; 
  isEnrolled?: boolean;
  completedLessons?: number;
  totalLessons?: number;
}

export interface CourseFilters {
  category: string;
  difficulty: string;
  search: string;
  status: string;
}