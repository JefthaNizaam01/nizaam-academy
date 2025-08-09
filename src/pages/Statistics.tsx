import { Header } from "@/components/Header";
import { Button } from "@/components/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Statistics = () => {
  const navigate = useNavigate();
  
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
        
        <div className="bg-white dark:bg-[#181825] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-foreground">Statistics</h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-muted dark:bg-[#232946] text-foreground font-medium">Sort by</button>
              <select className="rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] text-foreground px-3 py-2">
                <option>All</option>
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </div>
          </div>

      
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {["UX Research", "Machine Learning", "Responsive Design", "3D Modeling"].map((title, i) => (
              <div key={title} className="bg-muted dark:bg-[#232946] rounded-xl p-6 flex flex-col items-center shadow">
                <span className="text-base font-semibold mb-2 text-foreground">{title}</span>
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-xl font-bold text-white mb-2">
                  {75 - i * 10}%
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span>Week</span>
                  <span>•</span>
                  <span>Month</span>
                  <span>•</span>
                  <span>Total</span>
                </div>
              </div>
            ))}
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow flex flex-col">
              <span className="text-base font-semibold mb-4 text-foreground">Learning Points</span>
              <div className="flex-1 flex items-center justify-center">
           
                <svg width="100%" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="0,60 40,50 80,55 120,30 160,40 200,20 240,35 280,10 300,20" stroke="#6366f1" strokeWidth="3" fill="none" />
                  <circle cx="280" cy="10" r="5" fill="#6366f1" />
                  <text x="220" y="25" fill="#6366f1" fontSize="12">125</text>
                </svg>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
              </div>
            </div>
            <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow flex flex-col">
              <span className="text-base font-semibold mb-4 text-foreground">Learning Points (Monthly)</span>
              <div className="flex-1 flex items-center justify-center">
              
                <svg width="100%" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="40" width="20" height="30" fill="#6366f1" />
                  <rect x="50" y="30" width="20" height="40" fill="#0ea5e9" />
                  <rect x="90" y="50" width="20" height="20" fill="#22d3ee" />
                  <rect x="130" y="20" width="20" height="50" fill="#a21caf" />
                  <rect x="170" y="35" width="20" height="35" fill="#f59e42" />
                  <rect x="210" y="10" width="20" height="60" fill="#10b981" />
                </svg>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
            <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow flex flex-col">
              <span className="text-base font-semibold mb-4 text-foreground">Course Activities</span>
              <div className="flex-1 flex items-center justify-center">
           
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="32" stroke="#6366f1" strokeWidth="12" fill="none" />
                  <circle cx="40" cy="40" r="32" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="201" strokeDashoffset="60" />
                  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#6366f1" fontSize="18">75%</text>
                </svg>
              </div>
              <div className="flex justify-center text-xs text-muted-foreground mt-2">In Progress</div>
            </div>
          </div>

        
          <div className="bg-muted dark:bg-[#232946] rounded-xl p-6 shadow mt-8">
            <h2 className="text-xl font-semibold mb-2 text-foreground">Recent Activity</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Completed "React for Beginners"</li>
              <li>Enrolled in "Advanced TypeScript"</li>
              <li>Logged in 5 days in a row</li>
              <li>Completed "UI/UX Design Principles"</li>
              <li>Earned 100 points in July</li>
              <li>Streak: 12 days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
