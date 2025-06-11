'use client';

import React from 'react';
import { RewardColumn } from './RewardColumn';
import { Loading } from '@/shared/components/loading/Loading';
import Error from '@/shared/components/error/Error';
import { useFindRewardsForUserQuery } from '@/graphql/generated/output';

export function RewardDashboard() {
  const { data, loading, error, refetch } = useFindRewardsForUserQuery({
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="flex h-full w-full gap-4 px-4 py-6">
      <RewardColumn
        rewards={data?.findRewardsForUser}
        onRefreshReward={() => refetch()}
      />
    </div>
  );
}
