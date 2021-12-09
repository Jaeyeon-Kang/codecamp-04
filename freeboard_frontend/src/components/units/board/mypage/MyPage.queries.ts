import { gql } from "@apollo/client";


export const CREATE_POINT_TRANSACTION_OF_LOADING=gql`
 mutation createPointTransactionOfLoading( $impUid: ID! ){
     createPointTransactionOfLoading(impUid: $impUid){
        _id
        impUid
        amount
 }
}
`


export const FETCH_USED_ITEMS_I_BOUGHT=gql`
 query fetchUseditemsIBought {
    fetchUseditemsIBought{
       _id
       name
       price
 
 }
}
`

export const FETCH_USER_LOGGED_IN=gql`
 query fetchUserLoggedIn{
   fetchUserLoggedIn{
       _id
      email
      userPoint{amount}
 }
}
`