'use client';

import React, { useState } from 'react';
import { GoalType } from '../type';
import UpdateGoalDialog from './UpdateGoalDialog';
import { CreateGoalForm } from './create-goal.form';


interface GoalColumnProps {
  goals: GoalType[];
  refetchGoal: () => void;
}

export function GoalColumn({ goals, refetchGoal }: GoalColumnProps) {
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <section className="border-border/60 bg-card flex flex-1 flex-col rounded-xl border shadow-sm">
      <header className="bg-muted/40 flex items-center justify-between rounded-t-xl px-6 py-3">
        <h2 className="text-foreground text-lg font-semibold">Goals</h2>
        <CreateGoalForm onRefreshGoal={refetchGoal} />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {goals.length === 0 ? (
          <p className="text-muted-foreground">No goals found</p>
        ) : (
          goals.map((goal) => (
            <div
              key={goal.id}
              className="border border-gray-200 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{goal.title}</h3>
                <button
                  onClick={() => {
                    setSelectedGoal(goal);
                    setIsEditOpen(true);
                  }}
                  className="text-gray-500 hover:text-primary-500 transition"
                  title="Edit Goal"
                >
                  ⚙️
                </button>
              </div>
              <p className="text-sm text-gray-600">
                {goal.description ?? 'No description'}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-0.5 text-sm font-medium">
                  ★ {goal.starReward ?? 0}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedGoal && (
        <UpdateGoalDialog
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          goalId={selectedGoal.id}
          currentTitle={selectedGoal.title}
          currentDescription={selectedGoal.description}
          currentStarReward={selectedGoal.starReward ?? 0}
          onUpdated={refetchGoal}
        />
      )}
    </section>
  );
}
