// REACT
import React from 'react';

import { Content } from './Content';
import { Menu } from './Menu';

// ASSETS

// COMPONENTS

// TYPES

export function Header() {
  return (
    <div className="pl-[86px]">
      <div className="max-w-full min-h-full my-0 mx-auto rounded-0">
        <Content />
        <Menu />
      </div>
    </div>
  );
}
