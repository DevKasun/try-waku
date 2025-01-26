'use client'; 


import { useAuth } from '../hooks/useAuth';
import { Link } from 'waku';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuth();

  if (!user) {
    return (
      <div>
        <p>You must be signed in to view this page.</p>
        <Link to="/sign-in">Sign In</Link>
      </div>
    );
  }

  return <>{children}</>;
};