'use client';

import React, { createContext, useContext } from 'react';
import { useProfile } from '@/shared/hooks/useProfile';

type AuthContextType = {
  profile: { email: string } | null;
  loading: boolean;
  refetch: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { profile, loading, refetch } = useProfile();
  return (
    <AuthContext.Provider value={{ profile, loading, refetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
