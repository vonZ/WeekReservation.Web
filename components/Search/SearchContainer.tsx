import { FunctionComponent as FC, useState } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-grid-system';
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
  background-image: ${props => `url(${props.url})`};
  transition: 0.2s;
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

  const imageSrc = 'http://ch.test.viktorvonzeipel.com/wp-content/uploads/2017/02/20160702-DSC_0179-e1487700778324.jpg';

  return (
    <div style={{ position: 'relative' }}>
      <BackgroundImage collapse={hasSearched} url={imageSrc} />
      <div style={{ position: 'absolute', top: '50%', marginTop: '-28px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'white' }}>När vill du resa hit?</h1>
        <p style={{ fontSize: '1.4rem', color: 'white' }}>Sök efter ett datum</p>
      </div>
      <Container>
        <Row justify="center">
          <SearchInputContainer>
            <DateSearch />
          </SearchInputContainer>
        </Row>
      </Container>
      <button onClick={() => setSearched(!hasSearched)}>Reservera vecka</button>
    </div>
  );
};

export default SearchContainer;
