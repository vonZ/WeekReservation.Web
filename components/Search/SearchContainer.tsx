import { FunctionComponent as FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-grid-system';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_SLOT_BY_DATESPAN } from '../../graphql';
import { PaddingWrapper } from '../Shared';
import Hero from '../Hero';
import DateSearch from './DateSearch/DateSearch';
import ResultList from './SearchResult/ResultList';

interface ISelectedResultWrapperProps {
  readonly istriggered: boolean;
}

const SearchInputContainer = styled.div`
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: white;
  border: 1px solid #00000012;
  border-radius: 1px;
  box-shadow: 0px 2px 6px 1px #00000005;
`;

const SearchResultContainer = styled.div`
  padding: 50px 0px;
`;

const SelectedResultWrapper = styled.div<ISelectedResultWrapperProps>`
  background: white;
  padding: 30px;
  position: fixed;
  box-shadow: 0px 2px 6px 1px #00000005;
  width: 100%;
  bottom: 0px;
  top: ${props => (props.istriggered ? '90%' : '100%')};
  transition: all 0.2s ease-out;
`;

const SearchContainer: FC = () => {
  const [hasSearched, setSearched] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({});
  const [searchSlot, { data: slotData }] = useLazyQuery(GET_SLOT_BY_DATESPAN);

  useEffect(() => {
    if (slotData && slotData.getSlotByDateSpan) {
      console.log(slotData.getSlotByDateSpan);
      setSearched(true);
    }
  }, [slotData]);

  const resultListProps = {
    // searchResult: slotData?.getSlotByDateSpan || [],
    searchResult: slotData ? slotData.getSlotByDateSpan : [],
  };

  return (
    <>
      <Hero hasSearched={hasSearched} />
      <Container>
        <Row justify="center">
          <SearchInputContainer>
            <DateSearch searchSlot={searchSlot} />
          </SearchInputContainer>
        </Row>
      </Container>
      <button onClick={() => setSelectedSlot({ alias: 'Vecka 25' })}>Boka</button>
      <SearchResultContainer>
        <Container>
          <Row justify="center">
            <PaddingWrapper>
              <ResultList {...resultListProps} />
            </PaddingWrapper>
          </Row>
        </Container>
      </SearchResultContainer>

      <SelectedResultWrapper istriggered={!!Object.keys(selectedSlot).length}>
        <Container>
          <h2>Vecka 25</h2>
        </Container>
      </SelectedResultWrapper>
    </>
  );
};

export default SearchContainer;
