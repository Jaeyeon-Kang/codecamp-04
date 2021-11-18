import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`


export default function DynamicProduct() {

    const router = useRouter()
    
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [ createProduct ] = useMutation(CREATE_PRODUCT)

    function onChangeSeller(event) {
        setSeller(event.target.value)
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeDetail(event) {
        setDetail(event.target.value)
    }

    function onChangePrice(event) {
        setPrice(event.target.value)
    }
    
    async function SignupButton() {
        try{
            const result = await createProduct({
                    variables : {
                        seller,
                        createProductInput: {
                            name,
                            detail,
                            price: Number(price)
                        }
                    }
                })
                console.log(result)
                router.push(`/quiz/05_02_dynamic_routed/${result.data.createProduct._id}`)
            }
            catch(error) {
                alert(`상품등록에 실패했습니다 ${error.message}`)
            }
        

        }

    return (

        <>
            판매자:    <input text="text" onChange={onChangeSeller}/><br/>
            상품명:    <input text="text" onChange={onChangeName}/><br/>
            상품내용:  <input text="text" onChange={onChangeDetail}/><br/>
            상품 가격: <input text="text" onChange={onChangePrice}/><br/>
            <button onClick={SignupButton}>등록하기</button>
        </>

    )
}