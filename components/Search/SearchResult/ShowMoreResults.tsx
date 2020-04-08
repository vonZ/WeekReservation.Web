import { FunctionComponent as FC } from 'react';
import * as $ from './style';

interface IShowMoreResultsProps {
  shouldRender: boolean;
  onClick: any;
}

const ShowMoreResults: FC<IShowMoreResultsProps> = ({ shouldRender = false, onClick }) => {
  if (!shouldRender) return null;

  return (
    <$.ShowMoreResultsWrapper>
      <$.StyledButton onClick={onClick}>Visa fler resultat</$.StyledButton>
    </$.ShowMoreResultsWrapper>
  );
};

export default ShowMoreResults;
