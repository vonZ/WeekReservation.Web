import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
    headers: {
      "client-name": "Week reservatation [web]",
      "client-version": "1.0.0"
    }
  })
};

export default withData(config);
