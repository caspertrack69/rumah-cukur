import React from 'react';
import { Scissors } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Logo - Centered */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary-300 p-2 rounded-lg">
              <Scissors className="h-6 w-6 text-dark-900" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">
              Rumah Cukur
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;