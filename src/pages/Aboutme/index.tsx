// REACT
import React from 'react';

import { ContentContainer } from '../../components/ContentContainer';
import { TopNavigation } from '../../components/ContentContainer/TopNavigation';
import { SocialMedia } from '../../components/SocialMedia';

export function Aboutme() {
  return (
    <ContentContainer>
      <TopNavigation title="Home" />
      <div className="flex flex-col w-full my-0 mx-auto pt-48 p-6 h-[calc(100vh-64px)]">
        <div className="flex flex-col items-center justify-start  p-1 m-0 font-display">
          <h2 className="text-3xl font-semibold	text-neutral-100 my-0 mt-1 mb-2">
            Felipe Mamede
          </h2>
        </div>
        <SocialMedia />
        <div className="text-[#bbb] text-xs text-center mt-auto">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </ContentContainer>
  );
}
