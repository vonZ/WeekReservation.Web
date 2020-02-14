import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-boost';

const config = {
  ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
  link: new HttpLink({
    // uri: "http://localhost:4000/graphql",
    uri: 'https://weekreservationapi.viktorvz.now.sh/src',
    headers: {
      'client-name': 'Week reservatation [web]',
      'client-version': '1.0.0',
    },
  }),
};

export default withData(config);
