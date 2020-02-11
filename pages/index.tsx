import { useQuery } from '@apollo/react-hooks';
import { useStateValue } from '../lib/state';
import withData from '../lib/apollo';
import { GET_ALL_SLOTS } from '../graphql';

import Header from '../components/Header/Header';
import Button from '../components/Shared/Button';
import SlotsListingContainer from '../components/SlotsListing/SlotsListingContainer';

const NewComponent = () => {
  const [{ theme }, dispatch] = useStateValue();
  console.log({ theme });

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

export default withData(() => {
  const { data } = useQuery(GET_ALL_SLOTS);
  const { getAllSlots = [] } = data ? data : {};

  const slotsListingContainerProps = {
    getAllSlots,
  };

  return (
    <>
      <Header />
      <NewComponent />
      <SlotsListingContainer {...slotsListingContainerProps} />
    </>
  );
});
