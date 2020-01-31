import Layout from '../lib/layout';
import { useStateValue } from '../lib/state';
import Header from '../components/Header';
import withData from '../lib/apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ALL_SLOTS } from '../graphql';

import Button from '../components/Shared/Button';

const NewComponent = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <button
      onClick={() =>
        dispatch({
          type: 'changeTheme',
          newTheme: { primary: 'red' },
        })
      }
    >
      Ändra tema
    </button>
  );
};

export default withData(props => {
  const { data: slotNodes, loading: slotDataIsLoading, error: getAllSlotsHasError } = useQuery(GET_ALL_SLOTS);

  console.log({ slotNodes });

  return (
    <Layout title="Sök vecka">
      <Header />
      <NewComponent />
      <Button onClick={() => console.log('Klick')}>Testknapp</Button>
    </Layout>
  );
});
