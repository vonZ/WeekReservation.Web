import * as React from 'react';

interface IButtonProps {
  onClick: any;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
