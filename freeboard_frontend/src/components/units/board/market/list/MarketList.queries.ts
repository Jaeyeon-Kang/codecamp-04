import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      price
      createdAt
      images
      seller {
        name
      }
    }
  }
`;

export const FETCH_USED_ITEMS_SEARCH = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      remarks
      price
      createdAt
      images
    }
  }
`;
