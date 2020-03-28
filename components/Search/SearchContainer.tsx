import { FunctionComponent as FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-grid-system';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_SLOT_BY_DATESPAN } from '../../graphql';
import { PaddingWrapper } from '../Shared';
import Hero from '../Hero';
import DateSearch from './DateSearch/DateSearch';
import ResultList from './SearchResult/ResultList';

const SearchInputContainer = styled.div`
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: white;
  sborder: 1px solid #00000012;
  border-radius: 1px;
  box-shadow: 0px 2px 6px 1px #00000005;
`;

const SearchResultContainer = styled.div`
  padding: 50px 0px;
`;

const SearchContainer: FC = () => {
  const [hasSearched, setSearched] = useState(false);
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
      <SearchResultContainer>
        <Container>
          <Row justify="center">
            <PaddingWrapper>
              <ResultList {...resultListProps} />
            </PaddingWrapper>
          </Row>
        </Container>
      </SearchResultContainer>
    </>
  );
};

export default SearchContainer;
