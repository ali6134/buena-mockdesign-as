import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-gray-300 rounded-full h-6" style={{ width: '30%'}}>
      <div className="absolute bg-black h-6 rounded-full text-center text-white" style={{ width: `${percentage}%` }}>
        {currentStep}/{totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
