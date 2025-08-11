import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

export const MainLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#13131a] dark:via-[#181825] dark:to-[#10101a]">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 relative">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
