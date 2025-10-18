import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/StrudentDashbord/DashboardSidebar';
import DashboardHeader from '@/components/StrudentDashbord/DashboardHeader';
import DashboardTabs from '@/components/StrudentDashbord/DashboardTabs';
import RightSidebar from '@/components/StrudentDashbord/RightSidebar';

export default function StudentDashboard() {
  const location = useLocation();
  const isHomeDashboard =
    location.pathname === '/dashboard' || location.pathname === '/dashboard/';

  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        {/* Header */}
        <DashboardHeader
          onLeftSidebarToggle={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          onRightSidebarToggle={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
        />
        <div className="flex h-svh scrollbar-hide-y">
          {/* Sidebar */}
          <DashboardSidebar
            isOpen={isLeftSidebarOpen}
            onClose={() => setIsLeftSidebarOpen(false)}
          />
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
              <RightSidebar
                isOpen={isRightSidebarOpen}
                onClose={() => setIsRightSidebarOpen(false)}
              />
            </div>
          </div>
        </div>

        {/* Mobile overlay backdrop */}
        {(isLeftSidebarOpen || isRightSidebarOpen) && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => {
              setIsLeftSidebarOpen(false);
              setIsRightSidebarOpen(false);
            }}
          />
        )}
      </div>
    </SidebarProvider>
  );
}
