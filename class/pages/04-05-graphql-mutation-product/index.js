import { useMutation,gql } from '@apollo/client'
import { useState } from 'react'

// api하고
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProductPage(){
    const [createProduct] = useMutation(CREATE_PRODUCT) // 만들고
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState(0)


    function onChangeSeller(event){
        setSeller(event.target.value)
    }

    function onChangeName(event){
        setName(event.target.value)
    }

    function onChangeDetail(event){
        setDetail(event.target.value)
    }

    function onChangePrice(event){
        setPrice(event.target.value)
    }

    async function zzz(){
        const result = await createProduct({
            variables: { 
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price)
                }
            }
        }) // 실행하고
        console.log(result)
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller} /><br />
            상품명: <input type="text" onChange={onChangeName} /><br />
            내용: <input type="text" onChange={onChangeDetail} /><br />
            가격: <input type="number" onChange={onChangePrice} /><br />
            <button onClick={zzz}>상품 등록하기</button>
        </>
    )

}