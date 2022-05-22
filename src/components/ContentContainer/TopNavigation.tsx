// REACT
import React from 'react';

// COMPONENTS
import { ContentTitle } from './ContentTitle';
// TYPES
import { TopNavigationProps } from './types';

export function TopNavigation({ title }: TopNavigationProps) {
  return (
    <div className="flex flex-row items-center justify-evenly bg-[#222c3a] bg-opacity-90 w-full h-16 m-0 shadow-md">
      <ContentTitle title={title} />
    </div>
  );
}
