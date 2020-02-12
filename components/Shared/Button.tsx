import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick: any;
}

const StyledButton = styled.button`
  -webkit-appearance: none;
  border: none;
  padding: 10px;
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
  }
`;

const Button: FC<IButtonProps> = ({ children, onClick }) => <StyledButton onClick={onClick}>{children}</StyledButton>;

export default Button;
