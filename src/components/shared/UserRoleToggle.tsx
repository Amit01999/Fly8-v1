import { useState } from 'react';
import { motion } from 'framer-motion';

type UserRole = 'student' | 'agency' | 'university';
type UserRoleToggleProps = {
  activeRole: UserRole;
  onChange: (role: UserRole) => void;
};

const UserRoleToggle = ({ activeRole, onChange }: UserRoleToggleProps) => {
  return (
    <div className="flex items-center justify-center p-1 bg-blue-950 rounded-xl ">
      <RoleButton
        role="student"
        activeRole={activeRole}
        onChange={onChange}
        icon="🎓"
        label="Student"
      />
      <RoleButton
        role="agency"
        activeRole={activeRole}
        onChange={onChange}
        icon="🏢"
        label="Agency"
      />
      <RoleButton
        role="university"
        activeRole={activeRole}
        onChange={onChange}
        icon="🏛️"
        label="University"
      />
    </div>
  );
};

type RoleButtonProps = {
  role: UserRole;
  activeRole: UserRole;
  onChange: (role: UserRole) => void;
  icon: string;
  label: string;
};

const RoleButton = ({
  role,
  activeRole,
  onChange,
  icon,
  label,
}: RoleButtonProps) => {
  const isActive = role === activeRole;

  return (
    <button
      onClick={() => onChange(role)}
      className={`relative flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg transition-colors ${
        isActive ? '' : 'hover:bg-[#00ABD9]'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeRoleIndicator"
          className="absolute inset-0 bg-blue-400 shadow-md rounded-lg"
          initial={false}
          transition={{ type: 'spring', duration: 0.5 }}
        />
      )}
      <span className="relative z-10 text-lg">{icon}</span>
      <span
        className={`relative z-10 font-medium ${
          isActive ? 'text-black' : 'text-muted'
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default UserRoleToggle;
export type { UserRole };
