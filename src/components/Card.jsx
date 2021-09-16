import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 300px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: -2px 0px 10px 2px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: -2px 0px 10px 2px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -2px 0px 10px 2px rgba(0, 0, 0, 0.61);
  background-color: ${({ theme }) => theme.colors.white};
`;

const Card = ({ children, className }) => {
  return  <Wrapper className={className}>{children}</Wrapper>;
};

export default Card;
