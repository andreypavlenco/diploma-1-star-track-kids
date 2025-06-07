
'use client';

import { useAuth } from "../useAuth";

export function SignOutButton() {
  const { signOut } = useAuth();
  return (
    <button onClick={signOut} className="btn-logout">
      Logout
    </button>
  );
}
