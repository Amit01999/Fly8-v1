// import { useState } from 'react';
// import { motion } from 'framer-motion';

// type UserRole = 'student' | 'partners' | 'institution';
// type UserRoleToggleProps = {
//   activeRole: UserRole;
//   onChange: (role: UserRole) => void;
// };

// const UserRoleToggle = ({ activeRole, onChange }: UserRoleToggleProps) => {
//   return (
//     <div className="flex items-center justify-center p-1 bg-blue-950 rounded-xl ">
//       <RoleButton
//         role="student"
//         activeRole={activeRole}
//         onChange={onChange}
//         icon="🎓"
//         label="Student"
//       />
//       <RoleButton
//         role="partners"
//         activeRole={activeRole}
//         onChange={onChange}
//         icon="🏢"
//         label="Partners "
//       />
//       <RoleButton
//         role="institution"
//         activeRole={activeRole}
//         onChange={onChange}
//         icon="🏛️"
//         label="Institution"
//       />
//     </div>
//   );
// };

// type RoleButtonProps = {
//   role: UserRole;
//   activeRole: UserRole;
//   onChange: (role: UserRole) => void;
//   icon: string;
//   label: string;
// };

// const RoleButton = ({
//   role,
//   activeRole,
//   onChange,
//   icon,
//   label,
// }: RoleButtonProps) => {
//   const isActive = role === activeRole;

//   return (
//     <button
//       onClick={() => onChange(role)}
//       className={`relative flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg transition-colors ${
//         isActive ? '' : 'hover:bg-[#00ABD9]'
//       }`}
//     >
//       {isActive && (
//         <motion.div
//           layoutId="activeRoleIndicator"
//           className="absolute inset-0 bg-blue-400 shadow-md rounded-lg"
//           initial={false}
//           transition={{ type: 'spring', duration: 0.5 }}
//         />
//       )}
//       <span className="relative z-10 text-lg">{icon}</span>
//       <span
//         className={`relative z-10 font-medium ${
//           isActive ? 'text-black' : 'text-muted'
//         }`}
//       >
//         {label}
//       </span>
//     </button>
//   );
// };

// export default UserRoleToggle;
// export type { UserRole };

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type UserRole = 'student' | 'partners' | 'institution';

type UserRoleToggleProps = {
  activeRole: UserRole;
  onChange: (role: UserRole) => void;
  roleLinks?: Partial<Record<UserRole, string>>;
};

const roles: { role: UserRole; icon: string; label: string }[] = [
  { role: 'student', icon: '🎓', label: 'Student' },
  { role: 'partners', icon: '🏢', label: 'Partners' },
  { role: 'institution', icon: '🏛️', label: 'Institution' },
];

const UserRoleToggle = ({
  activeRole,
  onChange,
  roleLinks,
}: UserRoleToggleProps) => {
  return (
    <div className="flex p-1 bg-blue-950 rounded-xl relative">
      {roles.map(({ role, icon, label }) => {
        const isActive = role === activeRole;
        const link = roleLinks?.[role];

        const buttonContent = (
          <>
            {isActive && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-blue-400 rounded-lg shadow-md z-0"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10 text-lg">{icon}</span>
            <span
              className={`relative z-10 font-medium ${
                isActive ? 'text-black' : 'text-white/60'
              }`}
            >
              {label}
            </span>
          </>
        );

        return (
          <div key={role} className="relative flex-1">
            {link ? (
              <Link
                to={link}
                onClick={() => onChange(role)}
                className="relative z-10 flex items-center justify-center gap-2 w-full h-full py-2 px-4 rounded-lg"
              >
                {buttonContent}
              </Link>
            ) : (
              <button
                onClick={() => onChange(role)}
                className="relative z-10 flex items-center justify-center gap-2 w-full h-full py-2 px-4 rounded-lg"
              >
                {buttonContent}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UserRoleToggle;
export type { UserRole };
