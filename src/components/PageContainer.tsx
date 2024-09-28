
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={`w-full pt-16 lg:pt-[5vh] lg:w-5/6 mx-auto ${className || ''}`}>
      {children}
    </div>
  );
};

export default PageContainer;
