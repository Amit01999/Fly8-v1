import { NavLink } from 'react-router-dom';
import {
  // Using placeholder icons until custom ones are available
  Globe2,
  Plane,
  Building2,
  Briefcase,
  HeartPulse,
  DollarSign,
} from 'lucide-react';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { useSidebar } from '@/components/ui/sidebar';

const ITEMS = [
  {
    label: 'Visa Assistance',
    to: '/dashboard/visa-assistance',
    icon: Globe2,
  },
  {
    label: 'Ticket Booking',
    to: '/dashboard/ticket-booking',
    icon: Plane,
  },
  {
    label: 'Accommodation Finder',
    to: '/dashboard/accommodation-finder',
    icon: Building2,
  },
  {
    label: 'Job Portal',
    to: '/dashboard/job-portal',
    icon: Briefcase,
  },
  {
    label: 'Medical Support',
    to: '/dashboard/medical-support',
    icon: HeartPulse,
  },
  {
    label: 'Student Loan',
    to: '/dashboard/student-loan',
    icon: DollarSign,
  },
];

export default function StudentSidebar() {
  // SidebarProvider must wrap this component in parent!
  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarContent className="h-full bg-gradient-to-b from-primary/90 via-secondary/70 to-background p-0">
        <SidebarGroup>
          <SidebarGroupLabel className="py-6 px-2 text-lg font-bold tracking-wide text-primary-foreground">
            Student Services
          </SidebarGroupLabel>
          <SidebarMenu>
            {ITEMS.map(item => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      'flex items-center gap-3 px-3 py-2 transition-colors rounded-lg font-medium' +
                      (isActive
                        ? ' bg-accent/80 text-primary shadow'
                        : ' text-background/80 hover:bg-accent/30 hover:text-primary')
                    }
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
