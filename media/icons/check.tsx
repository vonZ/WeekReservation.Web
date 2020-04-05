import { FunctionComponent as FC, useState } from 'react';

interface ICheckProps {}

const useOnLoadRef = (callback: any) => (element: any) => {
  if (element) {
    callback(element);
  }
};

const Check: FC<ICheckProps> = props => {
  const [iconHasLoaded, setIconLoaded] = useState(false);
  const ref = useOnLoadRef(() => setIconLoaded(true));

  return (
    <svg
      ref={ref}
      style={{ opacity: iconHasLoaded ? 1 : 0 }}
      width="1.6rem"
      height="1.6rem"
      viewBox="0 0 14 14"
      {...props}
    >
      <g fill="#12B320" fillRule="nonzero">
        <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm0 13A6 6 0 117 1a6 6 0 010 12z" />
        <path d="M5.84 8.27l-1-.94-.68.73 1.78 1.67 3.95-4.92-.78-.62z" />
      </g>
    </svg>
  );
};

export default Check;
