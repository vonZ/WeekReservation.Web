import { FunctionComponent as FC } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick: any;
}

const StyledButton = styled.button`
  -webkit-appearance: none;
  border: none;
  padding: 5px 7px;
  cursor: pointer;
  background: none;
  color: #1060b6;
  font-weight: bold;
  font-size: inherit;
`;

const Button: FC<IButtonProps> = ({ children, onClick }) => <StyledButton onClick={onClick}>{children}</StyledButton>;

export default Button;
