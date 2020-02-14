import gql from 'graphql-tag';

export const GET_ALL_SLOTS = gql`
  query slotNodes {
    getAllSlots {
      id
      alias
      fromDate
      toDate
      month
      occupationStatusCode
    }
  }
`;
