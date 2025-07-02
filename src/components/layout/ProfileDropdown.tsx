import { useRef, useState } from 'react';
import { ChevronDown, LayoutDashboard, LogOut } from 'lucide-react';

import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import { logout } from '../../services/operations/authAPI';
import { useAppSelector } from '@/hooks/redux/SelectorAndDispatchHooks';

export default function ProfileDropdown() {
  const user = useAppSelector(state => state.profile.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));
  if (!user) return null;

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover border border-sky-400"
        />
        <ChevronDown className="text-sm text-blue-600" />
      </div>
      {open && (
        <div
          onClick={e => e.stopPropagation()}
          ref={ref}
          className="absolute top-[118%] right-0 z-[1000] w-[180px] divide-y-[1px] divide-sky-400 overflow-hidden rounded-md border border-sky-400 bg-sky-100 shadow-lg"
        >
          <Link
            to="/phantom/StudentDashboard/my-profile"
            onClick={() => setOpen(false)}
          >
            <div className="flex w-full items-center gap-x-2 py-2 px-4 text-sm text-sky-800 hover:bg-sky-200 transition-colors duration-150">
              <LayoutDashboard className="text-sky-600" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-2 py-2 px-4 text-sm text-sky-800 hover:bg-sky-200 transition-colors duration-150 cursor-pointer"
          >
            <LogOut className="text-sky-600" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
}
