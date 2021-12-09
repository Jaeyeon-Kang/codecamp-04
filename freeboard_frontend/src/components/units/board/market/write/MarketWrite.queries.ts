import {gql}  from "@apollo/client";



export const CREATE_USED_ITEM = gql`
mutation createUseditem( $createUseditemInput: CreateUseditemInput!){
  createUseditem(createUseditemInput: $createUseditemInput){
        _id
        name
        contents
        price
        images
        remarks
 }
}

`

export const UPDATE_USED_ITEM = gql`
mutation updateUseditem(
  $updateUseditemInput:UpdateUseditemInput
   $useditemId: ID!){
  updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId){
    _id
    name
    contents
    price
    images
    remarks
  } 
}

`