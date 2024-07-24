import React from "react";

interface ProgressBarProps {
  bgcolor: string;
  completed: number;
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ bgcolor, completed, currentStep, totalSteps }) => {
  return (
    <div className="w-full max-w-3xl bg-gray-200 rounded-full h-6 my-4 mx-auto">
      <div
        className="h-full rounded-full flex items-center justify-center"
        style={{ width: `${completed}%`, backgroundColor: bgcolor, transition: 'width 1s ease-in-out' }}
      >
        <span className="text-white font-bold">{`${currentStep}/${totalSteps}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
