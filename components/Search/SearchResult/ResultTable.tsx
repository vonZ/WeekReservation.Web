import { FunctionComponent as FC, useState, useEffect } from 'react';
import { useDispatch } from '../../../context/searchContext';
import { Card } from '../../Shared';
// import { TransitionTbodyWrapper, TransitionTrWrapper } from './common';
import * as $ from './style';
import ResultTableItem from './ResultTableItem';
import ShowMoreResults from './ShowMoreResults';

interface IResultTableProps {
  searchResults?: any;
  nrOfItemsPerPage?: number;
}

const ResultTable: FC<IResultTableProps> = ({ searchResults = [], nrOfItemsPerPage = 3 }) => {
  const [nodes, setNodes] = useState(searchResults.slice(0, nrOfItemsPerPage));
  const [resultIndex, setResultIndex] = useState(nrOfItemsPerPage);
  const [selectedSlot, setSelectedSlot] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setNodes(searchResults.slice(0, resultIndex));
  }, [resultIndex]);

  useEffect(() => {
    dispatch({ type: 'setSelectedSlot', selectedSlot });
  }, [selectedSlot]);

  const showMoreResultsProps = {
    shouldRender: nodes.length < searchResults.length,
    onClick: () => setResultIndex(resultIndex + nrOfItemsPerPage),
  };

  return (
    <>
      <Card padding="0px">
        <table>
          <thead style={{ textAlign: 'left', color: '#5A5A5A' }}>
            <tr>
              <$.StyledTh>Tidpunkt</$.StyledTh>
              <$.StyledTh>Tillval</$.StyledTh>
              <$.StyledTh>Pris pers besökare</$.StyledTh>
              <$.StyledTh>Antal besökare</$.StyledTh>
            </tr>
          </thead>
          {/* <TransitionTbodyWrapper> */}
          <tbody>
            {nodes.map((item: any, key: string) => (
              // <TransitionTrWrapper key={key}>
              <tr key={key}>
                <ResultTableItem item={item} setSelectedSlot={setSelectedSlot} />
              </tr>
              // </TransitionTrWrapper>
            ))}
          </tbody>
          {/* </TransitionTbodyWrapper> */}
        </table>
      </Card>
      <ShowMoreResults {...showMoreResultsProps} />
    </>
  );
};

export default ResultTable;
