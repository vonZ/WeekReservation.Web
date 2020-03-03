import { withApollo } from '../lib/apollo';
import Header from '../components/Header/Header';
import SearchContainer from '../components/Search/SearchContainer';

const SearchWeekPage = () => {
  return (
    <>
      <Header />
      <SearchContainer />
    </>
  );
};

export default withApollo(SearchWeekPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
