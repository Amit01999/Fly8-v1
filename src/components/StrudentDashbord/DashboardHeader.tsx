import { Search, Bell, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo/logo.png';
import { useAppSelector } from '@/hooks/redux/SelectorAndDispatchHooks';
import { checkDomainOfScale } from 'recharts/types/util/ChartUtils';

const DashboardHeader = () => {
  const user = useAppSelector(state => state.profile.user);
  console.log('User in DashboardHeader:', user);
  const { toggleSidebar } = useSidebar();

  return (
    <header className=" px-10 sticky top-0 z-30 flex h-16 items-center justify-between bg-indigo-100">
      {/* Left: Brand logo */}
      <div className="flex items-center gap-2">
        <Link to="/phantom" className="flex items-center gap-2">
          <div className="relative w-16">
            <img src={logo} alt="Fly8" />
          </div>
        </Link>
      </div>

      {/* Center: Search bar */}
      <div className="hidden md:flex flex-1 items-center justify-center max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Here"
            className="w-full pl-9 bg-background border border-input rounded-full"
          />
        </div>
      </div>

      {/* Right: Notifications and profile */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative inline-flex items-center justify-center rounded-full w-10 h-10 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-auto">
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">New message received</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Appointment confirmed</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Visa application updated</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-2 flex justify-center text-sm text-primary">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className=" flex items-center gap-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <Avatar className="h-8 w-8 ">
                <AvatarImage
                  src="@/assets/picture/StudentServices/4.png"
                  alt="Profile"
                />
                <AvatarFallback className="bg-sky-500 p-3">
                  {`${user.firstName?.[0] ?? ''}${
                    user.lastName?.[0] ?? ''
                  }`.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start text-sm">
                <span className="font-medium">
                  {user.firstName} {''} {user.lastName}
                </span>
                <span className="text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <p>
                  {user.firstName} {''} {user.lastName}
                </p>
                <p className="text-xs text-muted-foreground"> {user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
