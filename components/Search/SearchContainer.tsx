import { FunctionComponent as FC, useState } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-grid-system';
import LazyLoad from 'react-lazyload';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_SLOT_BY_DATESPAN } from '../../graphql';
import img from '../../media/images/landscape.jpg';
import DateSearch from '../DateSearch/DateSearch';

interface IBackgroundImageProps {
  readonly collapse?: boolean;
  readonly url: string;
}

const BackgroundImage = styled.div<IBackgroundImageProps>`
  height: ${props => (props.collapse ? '250px' : '400px')};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  background-image: ${props => `url(${props.url})`};
  transition: 0.2s ease-in-out;
`;

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

const SearchContainer: FC = () => {
  const [hasSearched, setSearched] = useState(false);
  const [searchSlot, { data }] = useLazyQuery(GET_SLOT_BY_DATESPAN);

  if (data && data.getSlotByDateSpan) {
    console.log({ data });
  }

  const dateSearchProps = {
    searchSlot,
  };

  return (
    <div style={{ position: 'relative' }}>
      <LazyLoad offset={300} height={400} resize={true} once={true}>
        <BackgroundImage collapse={hasSearched} url={img} />
      </LazyLoad>
      <div style={{ position: 'absolute', top: '50%', marginTop: '-28px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'white' }}>När vill du resa hit?</h1>
        <p style={{ fontSize: '1.4rem', color: 'white' }}>Sök efter ett datum</p>
      </div>
      <Container>
        <Row justify="center">
          <SearchInputContainer>
            <DateSearch {...dateSearchProps} />
          </SearchInputContainer>
        </Row>
      </Container>
      <button onClick={() => setSearched(!hasSearched)}>Reservera vecka</button>
    </div>
  );
};

export default SearchContainer;
