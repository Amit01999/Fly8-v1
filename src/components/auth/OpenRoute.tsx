// This will prevent authenticated users from accessing this route
import { useAppSelector } from '@/hooks/redux/SelectorAndDispatchHooks';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function OpenRoute({ children }) {
  const token = useAppSelector(state => state.auth.token);

  if (token === null) {
    return children;
  } else {
    return <Navigate to="/StudentDashboard/my-profile" />;
  }
}

export default OpenRoute;
