import { House, Kanban, PaperPlaneTilt, User } from 'phosphor-react';
import React from 'react';

import { Divider } from './Divider';
import { SidebarIcon } from './SidebarIcon';
// TYPES

export function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
      <SidebarIcon icon={<House size="28" />} text="Home" />
      <Divider />
      <SidebarIcon icon={<User size="28" />} text="About Me" />
      <SidebarIcon icon={<Kanban size="28" />} text="Portfolio" />
      <SidebarIcon icon={<PaperPlaneTilt size="28" />} text="Contact" />
      <Divider />
    </div>
  );
}
