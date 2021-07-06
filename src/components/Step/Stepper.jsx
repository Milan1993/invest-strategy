import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import StepProgress from './StepProgress';
import Button from "../Button";

const StepperComponent = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  flex-direction: column;
  gap: 80px;
  display: inline-flex;
  justify-content: space-between;
`;

const StepperSelector = styled.div`
  position: absolute;
  top: 40px;
  height: fit-content;;
  display: inline-flex;
  /* Animate each step movement */
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  align-items: flex-end;
  padding: 10px;
`;

const StepWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Stepper = ({ steps, showStepNumbers, showPrevNext }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepperSelector = useRef(null);
  // Every time our currentStep is updated, we are going to trigger this
  useEffect(() => {
    moveStepper();
  });

  const goNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= steps.length) {
      setCurrentStep(nextStep);
    }
  };

  const goPreviousStep = () => {
    const previousStep = currentStep - 1;
    if (previousStep >= 1) {
      setCurrentStep(previousStep);
    }
  };

  const moveStepper = () => {
    if (stepperSelector.current) {
      const stepper = stepperSelector.current;
      const stepWidth = stepper.offsetWidth / steps.length;
      stepper.style.transform = `translateX(-${stepWidth * (currentStep - 1)}px)`;
    }
  };

  return (
    <StepperComponent>
      {showStepNumbers && <StepProgress stepsLength={steps.length} currentStep={currentStep} />}
      
      <StepperSelector ref={stepperSelector}>
        {steps.map((step, i) => (
          <StepWrapper key={i}>
            <step.element
              step={i + 1}
              goNextStep={goNextStep}
              goPreviousStep={goPreviousStep}
              // From our state
              currentStep={currentStep}
              // Check if this step is the first one
              isFirst={i === 0}
              // Check if its the last one
              isLast={i === steps.length - 1}
            />
          </StepWrapper>
        ))}
      </StepperSelector>

      {showPrevNext && (
        <ButtonWrapper>
          <Button isPrev onClick={goPreviousStep} label='Previous'/>
          <Button isNext onClick={goNextStep} label='Next'/>
        </ButtonWrapper>
      )}
    </StepperComponent>
  );
};