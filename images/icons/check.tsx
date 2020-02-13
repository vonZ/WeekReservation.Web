import * as React from 'react';

interface ICheckProps {}

const Check: React.FunctionComponent<ICheckProps> = props => (
  <svg width="1em" height="1em" viewBox="0 0 14 14" {...props}>
    <g fill="#12B320" fillRule="nonzero">
      <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm0 13A6 6 0 117 1a6 6 0 010 12z" />
      <path d="M5.84 8.27l-1-.94-.68.73 1.78 1.67 3.95-4.92-.78-.62z" />
    </g>
  </svg>
);

export default Check;
