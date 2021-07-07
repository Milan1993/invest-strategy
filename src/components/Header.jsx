import styled from "styled-components";
import mainLogo from "../assets/strategy-marketplace-header-logo.png";

const HEADER = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Img = styled.img`height: 42px;`;

const LoginLink = styled.a`
  text-decoration: none;
  border: 3px solid #566A85;
  color: #566A85;
  border-radius: 50px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-align: center;
  padding: .5em 1em;
  min-width: 80px;
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 18px;
`;

const Header = () => {
  return (
    <HEADER>
      <a href="">
        <Img src={mainLogo} alt="" />
      </a>
      <LoginLink href="">
        Login
      </LoginLink>
    </HEADER>
  );
};

export default Header;
