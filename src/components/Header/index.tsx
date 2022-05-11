// REACT
import React from 'react';

import { Content } from './Content';
import { Menu } from './Menu';
import { Section } from './SectionContent';

// ASSETS

// COMPONENTS

// TYPES

export function Header() {
  return (
    <div className="pl-[86px]">
      <div className="max-w-full min-h-full my-0 mx-auto rounded-0">
        <header className="max-h-full max-w-[470px] inline-block float-left w-full h-full text-center">
          <Content />
          <Menu />
        </header>
      </div>
      <Section />
    </div>
  );
}
