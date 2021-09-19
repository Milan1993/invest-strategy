import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: var(--color-backdrop);
`;

function Backdrop({ opacity, color, children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Backdrop;
