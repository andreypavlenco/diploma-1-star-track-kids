'use client'
import { useApolloClient } from '@apollo/client';
import { useRouter }      from 'next/navigation';
import { useLogoutUserMutation, FindProfileDocument } from '@/graphql/generated/output';

export function useAuth() {
  const client = useApolloClient();
  const router = useRouter();
  const [logout] = useLogoutUserMutation({
    refetchQueries: [FindProfileDocument],
    awaitRefetchQueries: true,
  });

  const signOut = async () => {
    await logout();
    await client.resetStore();   
    router.refresh();            
  };
  return { signOut };
}
