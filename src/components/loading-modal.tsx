"use client";

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
} from "@/components/ui/stepper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const steps = [1, 2, 3, 4];

export function LoadingScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(interval);
          // Navigate to dashboard when step 4 is completed
          router.push("/dashboard");
          return prev;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-3xl px-4 space-y-12">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map((step) => (
            <StepperItem
              key={step}
              step={step}
              className="[&:not(:last-child)]:flex-1"
              loading={isLoading && step === currentStep}
            >
              <StepperIndicator />
              {step < steps.length && <StepperSeparator />}
            </StepperItem>
          ))}
        </Stepper>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            {currentStep === 1 && "Analyzing your Twitter profile..."}
            {currentStep === 2 && "Generating content insights..."}
            {currentStep === 3 && "Optimizing engagement strategy..."}
            {currentStep === 4 && "Preparing your dashboard..."}
          </h2>
          <p className="text-muted-foreground">
            {currentStep === 1 && "We're analyzing your tweets, followers, and engagement patterns"}
            {currentStep === 2 && "Identifying your best performing content and audience preferences"}
            {currentStep === 3 && "Creating personalized recommendations for better engagement"}
            {currentStep === 4 && "Almost ready! Setting up your personalized dashboard"}
          </p>
        </div>
      </div>
    </div>
  );
} 