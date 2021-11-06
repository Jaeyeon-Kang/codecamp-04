import{ useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
//아래 조건들은 복붙하는것이 좋을것
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput:CreateProductInput!){
        createProduct(seller: $seller, createProductInput:$createProductInput){
          _id
          number
          message
        }
    }
`
//밑에 variables 에서 위로 넣으려면 $붙이기, 아래서 넣은게 위로 들어감
//왜 전달전달인가요? 나중에는 전달해주는게 여러개일 수 있기 때문에 윗쪽의 mutation부분에서 필요한 부분들을 아래쪽에서 찾아감
//반드시 $ 붙이기 $$$$
//아래 묶인 함수들을 이벤트함수라고 부름
//플레이그라운드 보면서 하기!!
export default function GraphqlMUtationProductPage(){
    const router = useRouter()
    const[createProduct] = useMutation(CREATE_PRODUCT)
    const[mySeller, setMySeller] = useState("")
    const[myName, setMyName] = useState("")
    const[MyDetail, setMyDetail] = useState("")
    const[MyPrice, setMyPrice] = useState("")
  
   
    function onChangeMyWriter(event){
        setMySeller(event.target.value)
    }
    function onChangeMyTitle(event){
        setMyName(event.target.value)
    }
    function onChangeMyContents(event){
        setMyDetail(event.target.value)
    }
    function onChangeMyPrice(event){
        setMyPrice(event.target.value)
    }
    
    async function zzz (){
        try {
            const result = await createProduct({
                variables: {
                    seller : mySeller,
                    createProductInput:{
                        name: myName,
                        detail: MyDetail,
                        price: Number(MyPrice)
                    }
                }
            })
            console.log(result)
            // router.push('/05-08-dynamic-product-read/'+result.data.createProduct._id) // 가장 기초
            router.push(`/05-08-dynamic-product-read/${result.data.createProduct._id}`) //템플릿 리터럴
            // router.push('/05-08-dynamic-product-read/${result.data.createProduct._id}') //잘못된 표기+
        } catch(error){
            console.log(error.message)
        }
    }
    return(
        <>
            판매자:<input type="text" onChange={onChangeMyWriter}/>
            상품명:<input type="text" onChange={onChangeMyTitle}/>
            상품내용:<input type="text" onChange={onChangeMyContents}/>
            상품가격:<input type="text" onChange={onChangeMyPrice}/>
            <button onClick={zzz}>상품 등록하기!! </button>
        </>
    )
}