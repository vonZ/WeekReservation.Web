import { FunctionComponent as FC, useState, useEffect } from 'react';
import { useDispatch } from '../../../context';
import { Card } from '../../Shared';
import { TransitionTbodyWrapper, TransitionTrWrapper } from './common';
import * as $ from './style';
import ResultTableItem from './ResultTableItem';

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

  // TODO: dispatch func on setSelectedSlot prop. No need for local state
  useEffect(() => {
    dispatch({ type: 'setSelectedSlot', selectedSlot });
  }, [selectedSlot]);

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
          <TransitionTbodyWrapper>
            {nodes.map((item: any, key: any) => (
              <TransitionTrWrapper key={key}>
                <ResultTableItem item={item} setSelectedSlot={setSelectedSlot} />
              </TransitionTrWrapper>
            ))}
          </TransitionTbodyWrapper>
        </table>
      </Card>
      {nodes.length < searchResults.length && (
        <div style={{ textAlign: 'center', margin: '30px 0px' }}>
          <$.StyledButton onClick={() => setResultIndex(resultIndex + nrOfItemsPerPage)}>
            Visa fler resultat
          </$.StyledButton>
        </div>
      )}
    </>
  );
};

export default ResultTable;
