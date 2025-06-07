import React from 'react';

export function Loading({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex items-center justify-center h-full w-full p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-primary"></div>
        <p className="text-lg font-medium text-foreground">{text}</p>
      </div>
    </div>
  );
}
