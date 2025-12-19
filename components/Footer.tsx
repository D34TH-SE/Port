import React from 'react';
import { PORTFOLIO_OWNER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {PORTFOLIO_OWNER}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};