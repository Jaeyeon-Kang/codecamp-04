import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
        seller
        name
        detail
        price 
        # 이게 그래프큐엘 주석 모냥
        }
    }
`

export default function DynamicProductReadPage() {

    const router = useRouter()    
    
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.myId 
        }

    }) // 페이지가 실행되면 자동실행됨
       // 삼항 연산자(?)
       // and 연산자(&&)
       // data?.~~ optional-chaining

    return (
        <>
            <div>나의 상품 아이디 : {router.query.myId}</div>
            <div>판매자:  {data ? data.fetchProduct.seller : "qqq"}</div>
            <div>상품명:  {data?.fetchProduct.name}</div>
            <div>상품상세:{data?.fetchProduct.detail}</div>
            <div>상품가격:{data && data.fetchProduct.price}</div>
        </>
    )
}