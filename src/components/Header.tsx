
import { Button } from '@/components/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Heart, BookOpen, BarChart3, MessageCircle, Bell, GraduationCap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCourseContext } from '@/context/CourseContext';
import { SidebarTrigger } from '@/components/sidebar';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useCourseContext();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between h-16 pl-0">
          {/* Left section: Hamburger and Logo */}
          <div className="flex items-center gap-2 pl-0" style={{ position: 'relative', width: '100%' }}>
            <SidebarTrigger className="!block z-[9999] ml-2 pl-0 fixed left-2 top-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="28" height="3" rx="1.5" fill="currentColor" />
                <rect y="13" width="28" height="3" rx="1.5" fill="currentColor" />
                <rect y="20" width="28" height="3" rx="1.5" fill="currentColor" />
              </svg>
            </SidebarTrigger>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity ml-12"
            >
              <div className="h-8 w-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-accent-gradient bg-clip-text text-transparent">
                Nizaam’s Academy
              </span>
            </button>
          </div>

          {/* Navigation */}
          {/* Navigation removed: Favorites and Compare are now in the sidebar */}

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Theme toggle with border */}
            <div className="border border-muted rounded-lg p-1 flex items-center justify-center bg-background">
              <ThemeToggle />
            </div>
            {/* Message, Notification, Profile */}
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <MessageCircle className="h-6 w-6 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Bell className="h-6 w-6 text-muted-foreground" />
            </button>
            <img
              src="/Profile2.jpg"
              alt="Profile"
              width={56}
              height={56}
              className="h-10 w-10 rounded-full border-2 "
            />
          </div>
        </div>
      </div>
    </header>
  );
};