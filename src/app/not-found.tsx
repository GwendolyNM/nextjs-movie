import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Not found',
};

function NotFound() {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
}

export default NotFound;
