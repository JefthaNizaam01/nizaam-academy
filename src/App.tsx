import { Toaster } from "@/components/toaster";
import { Toaster as Sonner } from "@/components/sonner";
import { TooltipProvider } from "@/components/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { CourseProvider } from "@/context/CourseContext";
import { CourseCatalog } from "./pages/CourseCatalog";
import { CourseDetail } from "./pages/CourseDetail";
import { Favorites } from "./pages/Favorites";
import { CourseComparison } from "./components/CourseComparison";
import { CourseOverview } from "./pages/CourseOverview";
import { Statistics } from "./pages/Statistics";
import { Settings } from "./pages/Settings";
import { MainLayout } from "./pages/MainLayout";
import { ThemeProvider } from "@/lib/theme-provider";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="edu-canvas-theme">
    <QueryClientProvider client={queryClient}>
      <CourseProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<CourseCatalog />} />
              <Route path="/overview" element={<CourseOverview />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/compare" element={<CourseComparison />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
            </Route>
          </Routes>
        </TooltipProvider>
      </CourseProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
