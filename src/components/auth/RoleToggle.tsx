import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { School, Briefcase, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Role = 'student' | 'partner' | 'institution';

interface RoleToggleProps {
  activeRole: Role;
}

const RoleToggle = ({ activeRole }: RoleToggleProps) => {
  const roles: { id: Role; label: string; icon: any; path: string }[] = [
    {
      id: 'student',
      label: 'Student',
      icon: GraduationCap,
      path: '/signup/student',
    },
    {
      id: 'partner',
      label: 'Partner',
      icon: Briefcase,
      path: '/signup/partner',
    },
    {
      id: 'institution',
      label: 'Institution',
      icon: School,
      path: '/signup/institution',
    },
  ];

  return (
    <Card className="p-1 mb-6">
      <div className="relative flex rounded-md">
        {roles.map(role => {
          const isActive = role.id === activeRole;
          const Icon = role.icon;

          return (
            <Link
              key={role.id}
              to={role.path}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 relative z-20 transition-colors rounded-md ${
                isActive ? '' : 'hover:bg-sky-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeRoleBg"
                  className="absolute inset-0 bg-primary/20 rounded-md"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <Icon
                className={`h-4 w-4 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {role.label}
              </span>
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export default RoleToggle;
