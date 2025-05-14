import { Outlet, useLocation } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/StrudentDashbord/DashboardSidebar';
import DashboardHeader from '@/components/StrudentDashbord/DashboardHeader';
import DashboardTabs from '@/components/StrudentDashbord/DashboardTabs';
import RightSidebar from '@/components/StrudentDashbord/RightSidebar';

export default function StudentDashboard() {
  const location = useLocation();
  const isHomeDashboard =
    location.pathname === '/dashboard' || location.pathname === '/dashboard/';

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        {/* Header */}
        <DashboardHeader />
        <div className="flex h-svh scrollbar-hide-y">
          {/* Sidebar */}
          <DashboardSidebar />
          {/* Main content */}
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Tabs */}
            <DashboardTabs />
            {/* Content area with right sidebar */}
            <div className="flex flex-1 overflow-hidden">
              {/* Main content area */}
              <main className="flex-1 p-4 md:p-6 overflow-y-auto scrollbar-hide">
                <Outlet />
              </main>
              {/* Right sidebar */}
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
