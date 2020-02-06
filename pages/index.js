import Layout from '../lib/layout';
import { Container } from 'react-grid-system';
import { useStateValue } from '../lib/state';
import Header from '../components/Header';
import DateSearch from '../components/DateSearch/DateSearch';
import withData from '../lib/apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ALL_SLOTS } from '../graphql';

import Button from '../components/Shared/Button';

const NewComponent = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <Button
      onClick={() =>
        dispatch({
          type: 'changeTheme',
          newTheme: { primary: 'red' },
        })
      }
    >
      Ändra tema
    </Button>
  );
};

export default withData(props => {
  const { data: slotNodes, loading: slotDataIsLoading, error: getAllSlotsHasError } = useQuery(GET_ALL_SLOTS);

  return (
    <Layout title="Sök vecka">
      <Header />
      <Container>
        <NewComponent />
        <Button onClick={() => console.log('Klick')}>Testknapp</Button>
        {/* <DateSearch /> */}
      </Container>
    </Layout>
  );
});
