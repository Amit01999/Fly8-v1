import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { StepInfo, FormStep } from '@/types/profileAssessment';

interface StepIndicatorProps {
  steps: StepInfo[];
  currentStep: FormStep;
  completedSteps: FormStep[];
}

export default function StepIndicator({
  steps,
  currentStep,
  completedSteps,
}: StepIndicatorProps) {
  const getCurrentStepIndex = () =>
    steps.findIndex(step => step.id === currentStep);
  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: '0%' }}
            animate={{
              width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = step.id === currentStep;
            const Icon = step.icon;

            return (
              <div key={step.id} className="flex flex-col items-center">
                {/* Step Circle */}
                <motion.div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    border-2 transition-all duration-300 z-10
                    ${
                      isCompleted
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 border-blue-500'
                        : isCurrent
                        ? 'bg-white border-blue-500 shadow-lg'
                        : 'bg-white border-gray-300'
                    }
                  `}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: isCurrent ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <Icon
                      className={`w-6 h-6 ${
                        isCurrent ? 'text-blue-500' : 'text-gray-400'
                      }`}
                    />
                  )}
                </motion.div>

                {/* Step Label */}
                <div className="mt-3 text-center max-w-[100px]">
                  <p
                    className={`text-xs font-medium ${
                      isCurrent || isCompleted
                        ? 'text-gray-900'
                        : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
