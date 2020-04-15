import { NextPage } from 'next';
import { useEffect } from 'react';
import { setConfiguration } from 'react-grid-system';
import { withApollo } from '../lib/apollo';
import { SearchProvider } from '../context/searchContext';
import Header from '../components/Header/Header';
import SearchContainer from '../components/Search/SearchContainer';

const SearchWeekPage: NextPage<any> = props => {
  console.log(props);

  useEffect(() => {
    setConfiguration({ containerWidths: [1140, 1140, 1140, 1140] });
  }, []);

  return (
    <>
      <Header />
      <SearchProvider>
        <SearchContainer />
      </SearchProvider>
    </>
  );
};

SearchWeekPage.getInitialProps = props => {
  console.log(props.query);

  return props.query;
};

export default withApollo(SearchWeekPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
