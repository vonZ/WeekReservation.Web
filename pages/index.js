import MainLayout from "../lib/layout";
import { StateProvider, useStateValue } from "../lib/state";
import Header from "../components/Header";
import withData from "../lib/apollo";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ALL_SLOTS } from "../graphql";

const NewComponent = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <button
      onClick={() =>
        dispatch({
          type: "changeTheme",
          newTheme: { primary: "red" }
        })
      }
    >
      Ändra tema
    </button>
  );
};

export default withData(props => {
  const initialState = {
    theme: { primary: "blue" }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeTheme":
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };

  const {
    data: slotNodes,
    loading: slotDataIsLoading,
    error: getAllSlotsHasError
  } = useQuery(GET_ALL_SLOTS);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MainLayout>
        <Header />
        <NewComponent />
      </MainLayout>
    </StateProvider>
  );
});
