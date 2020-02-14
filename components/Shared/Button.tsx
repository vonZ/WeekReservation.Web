import { FunctionComponent as FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick(): void;
  extendedStyle?: object;
  children: ReactNode;
}

const StyledButton = styled.button`
  -webkit-appearance: none;
  border: none;
  padding: 10px;
  color: inherit;
  cursor: pointer;
  background: none;
  font-weight: 700;
  font-size: inherit;
  transition: 0.5s;

  :focus {
    outline: none;
  }

  :hover {
    background: #eaeaea;
    border-radius: 2px;
    color: #0c244a;
  }
`;

const Button: FC<IButtonProps> = ({ children, extendedStyle, onClick }) => (
  <StyledButton style={extendedStyle} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
