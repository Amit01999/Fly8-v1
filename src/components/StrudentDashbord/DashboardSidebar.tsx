import { NavLink } from 'react-router-dom';
import {
  Briefcase,
  ChevronDown,
  Cog,
  GraduationCap,
  HelpCircle,
  Home,
  ListChecks,
  PackageCheck,
  Receipt,
  Shield,
  Ticket,
  UserRound,
  Wallet,
  Building,
  CirclePlus,
  PlusCircle,
  X,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

const services = [
  {
    name: 'Profile Assessment',
    icon: UserRound,
    to: '/StudentDashboard/profile-assessment',
    color: 'bg-purple-500/20 text-purple-500',
  },
  {
    name: 'Preapplication Support',
    icon: Shield,
    to: '/StudentDashboard/preparation-support',
    color: 'bg-blue-500/20 text-blue-500',
  },

  {
    name: 'Apply University',
    icon: GraduationCap,
    to: '/StudentDashboard/apply-university',
    color: 'bg-green-500/20 text-green-500',
  },
  {
    name: ' Visa & Interview Support',
    icon: PackageCheck,
    to: '/StudentDashboard/visa-interview-support',
    color: 'bg-amber-500/20 text-amber-500',
  },
  {
    name: 'Ticket & Travel Support',
    icon: Ticket,
    to: '/StudentDashboard/ticket-travel-support',
    color: 'bg-red-500/20 text-red-500',
  },
  {
    name: 'Find Accomodation',
    icon: Building,
    to: '/StudentDashboard/accommodation-finder',
    color: 'bg-cyan-500/20 text-cyan-500',
  },
  {
    name: 'Education Loan',
    icon: Wallet,
    to: '/StudentDashboard/student-loan',
    color: 'bg-emerald-500/20 text-emerald-500',
  },
  {
    name: ' Find Jobs Abroad ',
    icon: Briefcase,
    to: '/StudentDashboard/job-portal',
    color: 'bg-indigo-500/20 text-indigo-500',
  },
];

const account = [
  {
    name: 'Subscriptions',
    icon: Receipt,
    to: '/StudentDashboard/subscriptions',
    color: 'bg-fuchsia-500/20 text-fuchsia-500',
  },
  {
    name: 'Progress Report',
    icon: ListChecks,
    to: '/StudentDashboard/progress',
    color: 'bg-teal-500/20 text-teal-500',
  },
  {
    name: 'Payment History',
    icon: Wallet,
    to: '/StudentDashboard/payments',
    color: 'bg-rose-500/20 text-rose-500',
  },
  {
    name: 'Settings',
    icon: Cog,
    to: '/StudentDashboard/settings',
    color: 'bg-gray-500/20 text-gray-500',
  },
  {
    name: 'Help',
    icon: HelpCircle,
    to: '/StudentDashboard/help',
    color: 'bg-orange-500/20 text-orange-500',
  },
];

const shortcuts = [
  {
    name: 'Add Shortcut',
    icon: PlusCircle,
    to: '#',
    color: 'bg-blue-gray-500/20 text-blue-gray-500',
  },
];

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar = ({ isOpen, onClose }: DashboardSidebarProps) => {
  const location = useLocation();

  const renderNavLink = (item: {
    name: string;
    icon: any;
    to: string;
    color: string;
  }) => {
    const Icon = item.icon;
    // Check if current route matches this menu item
    const isActive = location.pathname === item.to;

    return (
      <SidebarMenuItem key={item.name}>
        <SidebarMenuButton asChild>
          <NavLink
            to={item.to}
            onClick={() => onClose()}
            className={cn(
              'group hover-slide-bg flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              isActive
                ? 'bg-blue-900 text-white font-semibold'
                : 'text-muted-foreground hover:text-white'
            )}
          >
            <span
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-lg',
                item.color
              )}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span
              className={cn(
                'relative z-10',
                isActive ? 'text-white' : 'text-secondary'
              )}
            >
              {item.name}
            </span>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  const SidebarContentComponent = () => {
    const isDashboardActive = location.pathname === '/StudentDashboard/home';

    return (
      <>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/StudentDashboard/home"
                  onClick={() => onClose()}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isDashboardActive
                      ? 'bg-blue-900 text-white font-semibold hover:bg-blue-900 hover:text-white'
                      : 'text-muted-foreground hover:bg-blue-900 hover:text-primary'
                  )}
                >
                  <span
                    className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-lg',
                      isDashboardActive
                        ? 'bg-primary/20 text-white'
                        : 'bg-primary/10 text-primary'
                    )}
                  >
                    <Home className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      'relative z-10',
                      isDashboardActive ? 'text-white' : 'text-secondary'
                    )}
                  >
                    Dashboard
                  </span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup className="bg-gray-50 dark:bg-gray-900/30 rounded-lg p-2 mb-2">
          <SidebarGroupLabel className="px-3 py-1 uppercase text-lg mb-2 font-bold text-primary/80">
            <h1 className=" font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b  rounded-full mr-2"></div>
              Services
            </h1>
          </SidebarGroupLabel>
          <SidebarMenu>{services.map(renderNavLink)}</SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="bg-gray-50 dark:bg-gray-900/30 rounded-lg p-2 mb-2">
          <SidebarGroupLabel className="px-3 py-1 uppercase text-xl font-bold text-primary/80">
            <h1 className=" font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b  rounded-full mr-2"></div>
              My Account
            </h1>
          </SidebarGroupLabel>
          <SidebarMenu>{account.map(renderNavLink)}</SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="bg-gray-50 dark:bg-gray-900/30 rounded-lg p-2 mb-2">
          <SidebarGroupLabel className="px-3 py-1 uppercase text-xl font-bold text-primary/80">
            <h1 className=" font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b  rounded-full mr-2"></div>
              Shortcuts
            </h1>
          </SidebarGroupLabel>

          <SidebarMenu>{shortcuts.map(renderNavLink)}</SidebarMenu>
        </SidebarGroup>

        <div className="flex-1"></div>

        <div className="p-3 mt-auto">
          <NavLink
            to="phantom/dashboard/new-request"
            onClick={() => onClose()}
            className="flex justify-center items-center gap-2 w-full p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-md transition-all font-medium"
          >
            <CirclePlus className="h-5 w-5" />
            <span>Add your feedback</span>
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      {/* Desktop Sidebar - Always visible on large screens */}
      <Sidebar
        variant="sidebar"
        collapsible="offcanvas"
        className="hidden lg:flex"
      >
        <SidebarSeparator className="mt-16" />
        <SidebarContent className="h-full bg-background border-r px-2 py-2 overflow-y-auto scrollbar-hide">
          <SidebarContentComponent />
        </SidebarContent>
      </Sidebar>

      {/* Mobile Sidebar - Slides in from left */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-72 bg-background border-r transform transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="h-[calc(100%-4rem)] overflow-y-auto scrollbar-hide px-2 py-2">
          <SidebarContentComponent />
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
