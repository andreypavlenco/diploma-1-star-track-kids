'use client';

import { Header } from '@/features/header';
import { HomeDashboard } from '@/features/home/components/HomeDashboard';
import MainLayout from '@/features/home/components/MainLayout';
import Error from '@/shared/components/error/Error';
import { Loading } from '@/shared/components/loading/Loading';
import { useProfile } from '@/shared/hooks/useProfile';

export default function HomePage() {
  const {
    profile,
    loading,
    error,
    todayQuests,
    tomorrowQuests,
    rewards,
    refetch,
  } = useProfile();

  if (loading) return <Loading />;
  if (error)   return <Error error={error} />;

  return (
    <div>
      <MainLayout profile={profile} />

      <HomeDashboard
        todayQuests={todayQuests}
        tomorrowQuests={tomorrowQuests}
        rewards={rewards}
        onRefreshReward={refetch}
      />
    </div>
  );
}
