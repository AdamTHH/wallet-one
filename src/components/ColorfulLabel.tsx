import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const ColorfulLabel: React.FC<SectionLabelProps> = ({ children, className }) => {
  return (
    <p className={`px-2 yellowToGreenGradientFull inline ${className || ''}`}>
      {children}
    </p>
  );
};

export default ColorfulLabel;
