// REACT
import React from 'react';

// TYPES
import { ContentTitleProps } from './types';

export function ContentTitle({ title }: ContentTitleProps) {
  return (
    <h5
      className="text-xl text-gray-400 tracking-wider font-semibold text-opacity-80 
  mr-auto ml-6 my-auto 
  transition duration-300 ease-in-out"
    >
      {title}
    </h5>
  );
}
