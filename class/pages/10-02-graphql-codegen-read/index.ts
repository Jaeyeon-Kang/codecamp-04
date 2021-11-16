import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"
import { IQuery, IQueryFetchProductArgs } from "../../src/commons/types/generated/types"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
            # GraphQL 주석
          }
    }
`

// 그래프ql에서는 #으로 주석


export default function DynamicProductReadPage(){
    const router = useRouter()
    console.log(router.query)
    
    // any로 했었던 data는 pick<Iquery, "fetchProduct"> 써주면 된다

    const { data } = useQuery<Pick<IQuery, "fetchProduct">, IQueryFetchProductArgs>(FETCH_PRODUCT, {
        variables: { 
            productId: router.query.myId
         }
    })

    console.log(data)


    return(
        <>
            <div>나의 상품 아이디: {router.query.myId}</div>
            <div>판매자: {data ? data.fetchProduct.seller : "잠시만 기다려주세요"} </div> 
            {/* 데이터가 있으면 앞에거, 없으면 뒤에것 보여줌, data들어오면 다시 앞에거 보여줌 */}
            <div>상품명: {data?.fetchProduct.name} </div>
            <div>내용: {data?.fetchProduct.detail} </div>
            {/* data? 이랑 data && data은 같은 것 */}
            <div>가격: {data && data.fetchProduct.price} </div>
        </>
    )
}