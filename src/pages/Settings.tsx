
import { Header } from "@/components/Header";
import { Button } from "@/components/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
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
        
        <div className="w-full max-w-5xl flex bg-white dark:bg-[#181825] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <aside className="w-64 bg-muted dark:bg-[#181825] border-r border-gray-200 dark:border-gray-700 flex flex-col py-8 px-6">
            <h2 className="text-lg font-semibold mb-8 text-foreground">Settings</h2>
            <nav className="flex-1">
              <ul className="space-y-2">
                <li>
                  <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium bg-primary text-primary-foreground shadow">
                    Personal Information
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium hover:bg-muted dark:hover:bg-[#232946] text-muted-foreground transition">
                    Security
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium hover:bg-muted dark:hover:bg-[#232946] text-muted-foreground transition">
                    Billing Information
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium hover:bg-muted dark:hover:bg-[#232946] text-muted-foreground transition">
                    Messages
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium hover:bg-muted dark:hover:bg-[#232946] text-muted-foreground transition">
                    Data export
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-10">
            <h1 className="text-2xl font-bold mb-6 text-foreground">Personal information</h1>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Profile</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] p-2 text-foreground" placeholder="Profile name" />
                  <p className="text-xs text-muted-foreground mt-1">This information will be displayed publicly so be careful what you share.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">About</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] p-2 text-foreground" placeholder="Brief description" />
                  <p className="text-xs text-muted-foreground mt-1">Brief description for your profile. URLs are hyperlinked.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Email address</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] p-2 text-foreground" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Phone number</label>
                  <input type="tel" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] p-2 text-foreground" placeholder="Phone number" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Country</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] p-2 text-foreground" placeholder="Country" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Language</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] p-2 text-foreground" placeholder="Language" />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-muted dark:bg-[#232946] text-foreground font-semibold hover:bg-gray-100 dark:hover:bg-[#232946]/80 transition">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition">Save</button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};
