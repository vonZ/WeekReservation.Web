import { withApollo } from '../lib/apollo';
import { Provider } from '../context';
import Header from '../components/Header/Header';
import SearchContainer from '../components/Search/SearchContainer';

const SearchWeekPage = () => (
  <>
    <Header />
    <Provider>
      <SearchContainer />
    </Provider>
  </>
);

export default withApollo(SearchWeekPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
