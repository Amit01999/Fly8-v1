import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/StrudentDashbord/DashboardSidebar';
import DashboardHeader from '@/components/StrudentDashbord/DashboardHeader';
import DashboardTabs from '@/components/StrudentDashbord/DashboardTabs';
import RightSidebar from '@/components/StrudentDashbord/RightSidebar';
import { socketService } from '@/services/socket';
import { useNotificationRealtime } from '@/hooks/useStudentNotifications';
import { useAppointmentRealtime } from '@/hooks/useStudentAppointments';

export default function StudentDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomeDashboard =
    location.pathname === '/dashboard' || location.pathname === '/dashboard/';

  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  // Initialize Socket.io connection
  useEffect(() => {
    // Get student info from localStorage
    const studentData = localStorage.getItem('user');

    if (!studentData) {
      console.warn('No user data found, redirecting to login');
      navigate('/signin/student');
      return;
    }

    try {
      const user = JSON.parse(studentData);
      const studentId = user._id || user.id;

      if (!studentId) {
        console.error('No student ID found');
        navigate('/signin/student');
        return;
      }

      // Connect to Socket.io server
      console.log('🔌 Initializing Socket.io connection for student:', studentId);
      socketService.connect(studentId, 'student');

      // Cleanup on unmount
      return () => {
        console.log('🔌 Disconnecting Socket.io');
        socketService.disconnect();
      };
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/signin/student');
    }
  }, [navigate]);

  // Initialize real-time listeners for notifications and appointments
  useNotificationRealtime();
  useAppointmentRealtime();

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
