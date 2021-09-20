import React, { FC } from "react";
import styled from "styled-components";

const Btn = styled.button<IProps>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: fit-content;
  text-align: center;
  padding: .7em 1.4em;
  color: ${(p) => p.color || 'black'};
  background: ${(p) => p.bg || 'transparent'};
  border: ${(p) => p.borderWidth || '0px'} solid ${(p) => p.borderColor || 'transparent'};
  border-radius: 5px;
  font-weight: ${(p) => p.fontWeight || 'normal'};
  font-size: ${(p) => p.fontSize || '1em'};
  white-space: nowrap;
  text-rendering: optimizeLegibility;

  &[disabled] {
    opacity: 0.75;
    cursor: not-allowed;
  }

  &.primary,
  &:hover {
    background-color: #566a85;
    color: white;
  }

  &.secondary {
    border-right: none !important;
  }

  svg {
    width: 35px;
    margin-right: 15px;
  }

  &.sm-onlyIcon {
    @media (max-width: 480px) {
      font-size: 0;
      place-items: center;
      padding: 10px;

      svg { margin: 0; }
    }
  }
`;

interface IProps {
  border?: string;
  color?: string;
  className?: string;
  bg?: string;
  borderWidth?: number,
  borderColor?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  isPrev?: boolean;
  isNext?: boolean;
  disabled?: boolean;
  fontWeight?: string;
  fontSize?: string | number;
}

const Button: FC<IProps> = ({
  border,
  className,
  color,
  bg,
  borderColor,
  height,
  onClick,
  radius,
  width,
  isPrev,
  isNext,
  disabled,
  fontWeight,
  fontSize,
  children,
}) => {
  return (
    <Btn
      onClick={onClick}
      disabled
      fontWeight={fontWeight}
      color={color}
      borderColor={borderColor}
      fontSize={fontSize}
      bg={bg}
      className={className}
    >
      {children}
    </Btn>
  );
};

export default Button;
