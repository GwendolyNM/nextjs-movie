import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The Best Moives on the best framework',
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Next JS is great!
    </div>
  );
}

export default layout;
