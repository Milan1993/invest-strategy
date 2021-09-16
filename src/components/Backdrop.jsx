import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-gray-900);
  z-index: 5;
`;

function Backdrop({ opacity, color, children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Backdrop;
