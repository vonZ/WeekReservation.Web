import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick: any;
  extendedStyle?: any;
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
