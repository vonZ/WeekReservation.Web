import { useEffect } from 'react';
import { setConfiguration } from 'react-grid-system';
import { withApollo } from '../lib/apollo';
import { Provider } from '../context';
import Header from '../components/Header/Header';
import SearchContainer from '../components/Search/SearchContainer';

const SearchWeekPage = () => {
  useEffect(() => {
    setConfiguration({ containerWidths: [1140, 1140, 1140, 1140] });
  }, []);

  return (
    <>
      <Header />
      <Provider>
        <SearchContainer />
      </Provider>
    </>
  );
};

export default withApollo(SearchWeekPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
