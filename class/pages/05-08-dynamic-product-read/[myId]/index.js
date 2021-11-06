import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId: $productId){
      seller
      name
      price
      detail
      # 버튼이 주석
      
    }
  }
`


export default function DynamicProductReadPage() {

  const router = useRouter()

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.myId }
  })

  console.log(data)

  return (
        <>
        {data?.fetchProduct &&
            <>
            <div>나의 상품 아이디 : {router.query.myId}</div>
            <div>판매자 : {data.fetchProduct.seller} </div>
            <div>상품명 : {data.fetchProduct.name}</div>
            <div>상품상세 : {data.fetchProduct.detail}</div>
            <div>상품가격 : {data.fetchProduct.price}</div>
            {/* 주석 */}
            </>
        }
        </>
  )
}
//?.옵셔널체이닝
//삼항연산자 
// ?true : false