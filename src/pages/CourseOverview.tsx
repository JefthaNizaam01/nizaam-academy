import { HeaderGoBack } from "@/components/HeaderGoBack";

export const CourseOverview = () => {
  return (
    <>
      <HeaderGoBack />
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 dark:from-[#13131a] dark:via-[#181825] dark:to-[#10101a] flex items-center justify-center p-8">
        <div className="w-full max-w-7xl bg-white dark:bg-[#181825] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-foreground">Course Overview</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-muted dark:bg-[#232946] text-foreground font-medium">This Week</button>
            <button className="px-4 py-2 rounded-lg bg-muted dark:bg-[#232946] text-foreground font-medium">This Month</button>
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-[#232946] dark:to-[#181825] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-4xl font-bold text-primary mb-2">12</span>
            <span className="text-muted-foreground">Courses Enrolled</span>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-[#1e3a8a] dark:to-[#232946] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">7</span>
            <span className="text-muted-foreground">Courses Completed</span>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-[#064e3b] dark:to-[#232946] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">5</span>
            <span className="text-muted-foreground">Active Courses</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-[#f59e42] dark:to-[#232946] rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">3</span>
            <span className="text-muted-foreground">Courses Planned</span>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow flex flex-col">
            <span className="text-base font-semibold mb-4 text-foreground">Activities</span>
            <div className="flex-1 flex items-center justify-center">
       
              <svg width="100%" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="0,60 40,50 80,55 120,30 160,40 200,20 240,35 280,10 300,20" stroke="#6366f1" strokeWidth="3" fill="none" />
                <polyline points="0,70 40,60 80,65 120,50 160,60 200,40 240,55 280,30 300,40" stroke="#f59e42" strokeWidth="3" fill="none" />
                <circle cx="280" cy="10" r="5" fill="#6366f1" />
                <text x="220" y="25" fill="#6366f1" fontSize="12">21 Hours</text>
              </svg>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
            </div>
          </div>
          <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow flex flex-col">
            <span className="text-base font-semibold mb-4 text-foreground">My Planning</span>
            <ul className="space-y-2">
              <li className="flex items-center justify-between bg-gradient-to-r from-primary/10 to-blue-100 dark:from-[#232946] dark:to-[#181825] rounded-lg px-4 py-2">
                <span>3D Animation Conference</span>
                <span className="text-xs text-muted-foreground">Dec 11, 03:00 PM</span>
              </li>
              <li className="flex items-center justify-between bg-gradient-to-r from-primary/10 to-blue-100 dark:from-[#232946] dark:to-[#181825] rounded-lg px-4 py-2">
                <span>Handle UX Research</span>
                <span className="text-xs text-muted-foreground">Dec 10, 10:30 PM</span>
              </li>
              <li className="flex items-center justify-between bg-gradient-to-r from-primary/10 to-blue-100 dark:from-[#232946] dark:to-[#181825] rounded-lg px-4 py-2">
                <span>Machine Learning Lesson</span>
                <span className="text-xs text-muted-foreground">Dec 12, 12:00 PM</span>
              </li>
            </ul>
          </div>
          <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow flex flex-col">
            <span className="text-base font-semibold mb-4 text-foreground">Completed Courses</span>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Java Code</span>
                <span className="text-xs text-green-500 font-semibold">74/100</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Logic Basic</span>
                <span className="text-xs text-green-500 font-semibold">66/100</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Team Building</span>
                <span className="text-xs text-green-500 font-semibold">34/100</span>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow mt-8">
          <h2 className="text-xl font-semibold mb-2 text-foreground">Your Learning Path</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Continue "React for Beginners" (80% complete)</li>
            <li>Start "Advanced TypeScript" (Not started)</li>
            <li>Review "UI/UX Design Principles" (Completed)</li>
            <li>Complete "Machine Learning Lesson" (In Progress)</li>
            <li>Attend "3D Animation Conference" (Planned)</li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};
