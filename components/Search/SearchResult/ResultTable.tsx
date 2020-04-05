import { FunctionComponent as FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../../Shared';
import { TransitionTbodyWrapper, TransitionTrWrapper } from './common';
import ResultTableItem from './ResultTableItem';

interface IResultTableProps {
  searchResults?: any;
  nrOfItemsPerPage?: number;
}

const StyledTh = styled.th`
  padding: 10px 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const StyledButton = styled.button`
  padding: 10px 25px;
  background: none;
  border-radius: 2px;
  border: 2px solid #5a5a5a;
  cursor: pointer;
  color: #5a5a5a;
  text-transform: uppercase;
`;

const ResultTable: FC<IResultTableProps> = ({ searchResults = [], nrOfItemsPerPage = 3 }) => {
  const [nodes, setNodes] = useState(searchResults.slice(0, nrOfItemsPerPage));
  const [resultIndex, setResultIndex] = useState(nrOfItemsPerPage);

  useEffect(() => {
    setNodes(searchResults.slice(0, resultIndex));
  }, [resultIndex]);

  return (
    <>
      <Card padding="0px">
        <table>
          <thead style={{ textAlign: 'left', color: '#5A5A5A' }}>
            <tr>
              <StyledTh>Tidpunkt</StyledTh>
              <StyledTh>Tillval</StyledTh>
              <StyledTh>Pris pers besökare</StyledTh>
              <StyledTh>Antal besökare</StyledTh>
            </tr>
          </thead>
          <TransitionTbodyWrapper>
            {nodes.map((item: any, key: any) => (
              <TransitionTrWrapper key={key}>
                <ResultTableItem item={item} />
              </TransitionTrWrapper>
            ))}
          </TransitionTbodyWrapper>
        </table>
      </Card>
      {nodes.length < searchResults.length && (
        <div style={{ textAlign: 'center', margin: '30px 0px' }}>
          <StyledButton onClick={() => setResultIndex(resultIndex + nrOfItemsPerPage)}>Visa fler resultat</StyledButton>
        </div>
      )}
    </>
  );
};

export default ResultTable;
