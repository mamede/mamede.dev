// REACT
import React from 'react';

export function Content() {
  return (
    <div className="relative w-44 mt-0 mx-auto mb-8 z-10">
      <img
        className="max-w-full border-4 border-transparent border-0 block rounded-animated animate-avatar"
        src="https://github.com/mamede.png"
        alt="Felipe Mamede"
      />
      <div className="absolute rounded-animated animate-avatar top-0 bottom-0 left-0 right-0 shadow-animate" />
    </div>
  );
}
