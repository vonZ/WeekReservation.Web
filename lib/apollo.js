import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    uri: "http://localhost:4000/" // Server URL
  })
};

export default withData(config);
