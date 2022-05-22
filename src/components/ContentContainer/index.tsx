// REACT
import React from 'react';

import { ContentContainerProps } from './types';

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="flex flex-col bg-[#222c3a] m-0 ml-16 h-full w-full overflow-hidden">
      {children}
    </div>
  );
}
