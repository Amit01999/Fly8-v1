import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutGrid, MessageSquare, Calendar, Bell, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  // Set the active tab based on the current URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('ai-assistance')) {
      setActiveTab('assistance');
    } else if (path.includes('book-appointment')) {
      setActiveTab('appointments');
    } else if (path.includes('updates')) {
      setActiveTab('updates');
    } else if (path.includes('free-ielts-registration')) {
      setActiveTab('offers');
    } else {
      setActiveTab('dashboard');
    }
  }, [location.pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'dashboard':
        navigate('/StudentDashboard');
        break;
      case 'assistance':
        navigate('/StudentDashboard/ai-assistance');
        break;
      case 'appointments':
        navigate('/StudentDashboard/book-appointment');
        break;
      case 'updates':
        navigate('/StudentDashboard/updates');
        break;
      case 'offers':
        navigate('/free-ielts-registration');
        break;
      default:
        navigate('/StudentDashboard');
    }
  };

  return (
    <div className="py-4 px-6 bg-white border-b relative z-10 overflow-y-auto scrollbar-hide">
      <div className="flex  gap-2 md:gap-4 ">
        <TabButton
          icon={<MessageSquare className="h-5 w-5" />}
          label="AI ASSISTANCE"
          active={activeTab === 'assistance'}
          onClick={() => handleTabChange('assistance')}
          color="from-blue-400 to-cyan-300"
        />
        <TabButton
          icon={<Calendar className="h-5 w-5" />}
          label="BOOK APPOINTMENT"
          active={activeTab === 'appointments'}
          onClick={() => handleTabChange('appointments')}
          color="from-emerald-400 to-teal-300"
        />
        <TabButton
          icon={<Bell className="h-5 w-5" />}
          label="UPDATES"
          active={activeTab === 'updates'}
          onClick={() => handleTabChange('updates')}
          color="from-amber-400 to-orange-300"
        />
        <TabButton
          icon={<Gift className="h-5 w-5" />}
          label="SPECIAL OFFERS"
          active={activeTab === 'offers'}
          onClick={() => handleTabChange('offers')}
          color="from-pink-500 to-rose-400"
          special
        />
      </div>
    </div>
  );
};

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  color: string;
  special?: boolean;
}

const TabButton = ({
  icon,
  label,
  active,
  onClick,
  color,
  special,
}: TabButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out relative',
        active
          ? `bg-gradient-to-r ${color} text-white shadow-md`
          : special
          ? `bg-gradient-to-r ${color} text-white shadow-lg hover:shadow-xl hover:scale-105`
          : 'bg-gray-50 text-gray-500 hover:bg-gray-100',
        special && 'ring-2 ring-pink-300 ring-offset-2'
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          'transition-transform duration-300',
          active ? 'scale-110' : ''
        )}
      >
        {icon}
      </span>
      <span className="text-xs font-bold whitespace-nowrap">{label}</span>
    </button>
  );
};

export default DashboardTabs;
