// REACT
import React from 'react';

// ASSETS

// COMPONENTS

// TYPES

export function Content() {
  return (
    <div className="bg-stone-800 relative w-full max-w-sm min-h-screen">
      <div className="inline-block float-left w-full max-w-sm h-full max-h-[80vh] text-center pt-16 pr-8 pb-11 pl-8 overflow-auto">
        <div className="relative w-44 mt-0 mx-auto mb-8 z-10">
          <img
            className="max-w-full border-4 border-transparent border-0 block rounded-animated animate-avatar"
            src="https://github.com/mamede.png"
            alt="Felipe Mamede"
          />
          <div className="absolute rounded-animated animate-avatar top-0 bottom-0 left-0 right-0 shadow-animate" />
        </div>
        <div className="header-titles">
          <h2>Alex Smith</h2>
          <h4>Web Designer</h4>
        </div>
      </div>
    </div>
  );
}
