import gql from 'graphql-tag';

export const GET_SLOT_BY_DATESPAN = gql`
  query getSlotByDateSpan($fromDate: String!, $toDate: String!) {
    getSlotByDateSpan(fromDate: $fromDate, toDate: $toDate) {
      id
      alias
      fromDate
      toDate
      capacity
      price
    }
  }
`;
