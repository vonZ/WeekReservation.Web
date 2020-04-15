import { FunctionComponent as FC } from 'react';
import { Container, Row } from 'react-grid-system';
import { PaddingWrapper } from '../Shared';
import * as $ from './style';
import { useSearch } from './hooks';
import Hero from '../Hero';
import DateSearch from './DateSearch/DateSearch';
import ResultList from './SearchResult/ResultList';

const SearchContainer: FC = () => {
  const { hasSearched, selectedSlot, slotData, searchSlot } = useSearch();

  const resultListProps = {
    // searchResult: slotData?.getSlotByDateSpan || [],
    searchResult: slotData ? slotData.getSlotByDateSpan : [],
  };

  return (
    <>
      <Hero hasSearched={hasSearched} />
      <Container>
        <Row justify="center">
          <$.SearchInputContainer>
            <DateSearch searchSlot={searchSlot} />
          </$.SearchInputContainer>
        </Row>
      </Container>
      <$.SearchResultContainer>
        <Container>
          <Row justify="center">
            <PaddingWrapper>
              <ResultList {...resultListProps} />
            </PaddingWrapper>
          </Row>
        </Container>
      </$.SearchResultContainer>
      <$.SelectedResultWrapper istriggered={!!Object.keys(selectedSlot).length}>
        <Container>
          <h2>{selectedSlot.alias}</h2>
          <p>{selectedSlot.capacity}</p>
        </Container>
      </$.SelectedResultWrapper>
    </>
  );
};

export default SearchContainer;
