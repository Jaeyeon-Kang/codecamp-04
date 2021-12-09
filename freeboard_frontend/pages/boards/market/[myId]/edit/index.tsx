import MarketWriteContainer from "../../../../../src/components/units/board/market/write/MarketWrite.container";
import {useQuery, gql} from "@apollo/client"
import {useRouter} from "next/router"
import { IQuery, IQueryFetchUseditemArgs } from "../../../../../src/commons/types/generated/types";


export const FETCH_USED_ITEMS = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      images
    }
  }
`;

export default function MarketUpdatePate(){
    const router = useRouter();
    const {data: updateData} = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
        FETCH_USED_ITEMS,
        {variables: { useditemId: String(router.query.myId)
            
        }}
    ) 
    return <MarketWriteContainer isEdit={true} updateData={updateData} />
}