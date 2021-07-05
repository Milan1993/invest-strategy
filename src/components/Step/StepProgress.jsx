import styled, {css} from "styled-components";

const StepperProgressWrapper = styled.div`
  position: absolute;
  top: 15px;
  width: 100%;
  z-index: 9;
`;

const Wrapper = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  margin: auto;
  justify-content: space-between;
`;

const StepTitle = styled.div`
  text-align: center;
  font-size: 0.7rem;
  align-items: center;
  background: #fff;
  padding: 0 1rem;
  height: 30px;
`;

const StepTitleNumber = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  top: 13px;
  z-index: -1;
  background: #e91e63;
  transition: width 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
`;

const StepperProgressBar = styled.div`
  ${props => props.width && css`
    width: ${props.width}%;
  `}
`;

const StepperProgress = ({ stepTitles, currentStep }) => {
  const progressPerStep = 100 / (stepTitles.length - 1);
  const progress = (currentStep - 1) * progressPerStep;

  return (
    <StepperProgressWrapper>
      <Wrapper>
        <StepperProgressBar width={progress} />

        {stepTitles.map((title, i) => (
          <StepTitle>
            <StepTitleNumber>{i + 1}</StepTitleNumber>
            {title}
          </StepTitle>
        ))}
      </Wrapper>
    </StepperProgressWrapper>
  );
};

export default StepperProgress;