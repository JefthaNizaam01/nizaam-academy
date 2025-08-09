import { BarChart3, BookOpen, Heart, Layers, Settings, Home } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Progress } from "@/components/progress";
import { Sidebar, SidebarContent, SidebarTrigger } from "@/components/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Course Overview", url: "/overview", icon: BookOpen },
  { title: "Favorites", url: "/favorites", icon: Heart },
  { title: "Compare", url: "/compare", icon: Layers },
  { title: "Statistics", url: "/statistics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent className="flex flex-col h-full bg-white dark:bg-[#181825] border-r shadow-lg z-40">
        <div className="flex items-center h-16 px-6 border-b border-muted relative">
          <SidebarTrigger className="fixed left-1/2 top-2 -translate-x-1/2 z-[9999] !block" />
          <span className="text-2xl font-bold tracking-tight text-primary ml-8 md:ml-0">Nizaam's Academy</span>
        </div>
        <nav className="flex-1 px-4 py-8 overflow-y-auto">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      isActive ? 'bg-primary text-primary-foreground shadow' : 'hover:bg-muted text-muted-foreground'
                    }`
                  }
                >
                  <item.icon className="h-6 w-6" />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-4 pb-8 mt-auto">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Enrolled</span>
              <span className="text-xs font-semibold">3/12</span>
            </div>
            <Progress value={25} className="h-2" />
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}