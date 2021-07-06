import styled from "styled-components";

const StepperProgressWrapper = styled.div`
  width: 100%;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StepTitle = styled.div`
  text-align: center;
  font-size: 0.7rem;
  align-items: center;
  background: #fafafa;;
  padding: 0 1rem;
`;

const StepTitleNumber = styled.div`
  font-size: 1rem;
  background: #ceeeff;
  height: 24px;
  width: 24px;
  margin: 0.3rem auto;
  line-height: 1.5;
  border: 3px solid #fff;
  border-radius: 100%;
`;

const StepperProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  top: 17px;
  z-index: -1;
  background: #e91e63;
  transition: width 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  width: ${props => props.width}%;
`;

const OL = styled.ol`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const StepperProgress = ({ stepsLength, currentStep }) => {
  const progressPerStep = 100 / (stepsLength - 1);
  const progress = (currentStep - 1) * progressPerStep;

  return (
    <StepperProgressWrapper>
      <StepperProgressBar width={progress} />

      <OL>
        {[...Array(stepsLength).keys()].map((title, i) => (
          <li key={i}>
          
            <StepTitle>
              <StepTitleNumber>{i + 1}</StepTitleNumber>
            </StepTitle>
          </li>
        ))}
      </OL>
    </StepperProgressWrapper>
  );
};

export default StepperProgress;