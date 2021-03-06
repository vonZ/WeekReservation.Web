import { useQuery } from '@apollo/react-hooks';
// import { useStateValue } from '../lib/state';
import { withApollo } from '../lib/apollo';
import { GET_ALL_SLOTS } from '../graphql';

import Header from '../components/Header/Header';
// import Button from '../components/Shared/Button';
import SlotsListingContainer from '../components/SlotsListing/SlotsListingContainer';

// const NewComponent = () => {
//   const [{ theme }, dispatch] = useStateValue();
//   console.log({ theme });

//   return (
//     <Button
//       onClick={() =>
//         dispatch({
//           type: 'changeTheme',
//           newTheme: { primary: 'red' },
//         })
//       }
//     >
//       Ändra tema
//     </Button>
//   );
// };

const IndexPage = () => {
  const { data } = useQuery(GET_ALL_SLOTS);
  const { getAllSlots: slotNodes = [] } = data ? data : {};

  const slotsListingContainerProps = {
    slotNodes,
    defaultMonth: 'September',
  };

  return (
    <>
      <Header />
      {/* <NewComponent /> */}
      <SlotsListingContainer {...slotsListingContainerProps} />
    </>
  );
};

export default withApollo(IndexPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: true,
});
