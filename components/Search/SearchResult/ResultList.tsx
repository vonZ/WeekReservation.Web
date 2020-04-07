import { FunctionComponent as FC } from 'react';
import { PaddingWrapper } from '../../Shared';
import ResultInfo from './ResultInfo';
import ResultTable from './ResultTable';

interface IResult {
  alias: string;
  fromDate: string;
  toDate: string;
}

interface IResultProps {
  searchResult: Array<IResult>;
}

const ResultList: FC<IResultProps> = ({ searchResult = [] }) => {
  if (!searchResult.length) return null;

  return (
    <>
      <ResultInfo />
      <PaddingWrapper value="35px 0px">
        <ResultTable searchResults={searchResult} />
      </PaddingWrapper>
    </>
  );
};

export default ResultList;
