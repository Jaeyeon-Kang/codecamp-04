import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller : $seller, createProductInput: $createProductInput) {
    _id
    number
    message
    }
  
}
`

export default function GraphqlMutationProductPage() {
    const [ myseller, setMySeller ] = useState("")
    const [ mypdname, setMyPdName ] = useState("")
    const [ mypddetail, setMyPdDetail ] = useState("")
    const [ mypdprice, setMyPdprice] = useState(0)
    
    const [ createProduct ] = useMutation(CREATE_PRODUCT)

    function onChangeMySeller(event) {
        setMySeller(event.target.value)
    }

    function onChangeMyPdName(event) {  
        setMyPdName(event.target.value)
    }

    function onChangeMyPdDetail(event) {
        setMyPdDetail(event.target.value)
    }
    
    function onChangeMyPdPrice(event) {
        setMyPdprice(event.target.value)
    }

    async function ProductSingup() {
        const result = await createProduct({
            variables: {
                seller: myseller,
                createProductInput: {
                    name: mypdname,
                    detail: mypddetail,
                    price: Number(mypdprice),
                }
            }
        })
        console.log(result)
    }

    return (
        <>
            판매자 : <input type="text" onChange={onChangeMySeller}/><br/>
            상품명 : <input type="text"onChange={onChangeMyPdName}/><br/>
            상품정보 : <input type="text"onChange={onChangeMyPdDetail}/><br/>
            상품가격 : <input type="text"onChange={onChangeMyPdPrice}/><br/>
            <button onClick={ProductSingup}>상품 등록하기</button>
        </>
    )
}