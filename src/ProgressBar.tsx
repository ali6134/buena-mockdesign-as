import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  return (
    <div className="w-full bg-gray-300 rounded-full h-6 my-4">
      <div className="bg-black h-6 rounded-full text-center text-white" style={{ width: `${percentage}%` }}>
        {currentStep}/{totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;

