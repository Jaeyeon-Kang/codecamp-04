import { useMutation,gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateProductArgs } from '../../src/commons/types/generated/types'

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
    const router = useRouter()
    // 앞쪽이 데이터(받는 데이터) 뒤쪽이 인풋데이터(variables)
    // pick 못들음;;;
    // 
    const [createProduct] = useMutation<Pick<IMutation, "createProduct">, IMutationCreateProductArgs>(CREATE_PRODUCT) // 만들고
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

        // 아래것들을 시도해봐
        try {

            const result = await createProduct({
                variables: { 
                    seller: "철수",
                    createProductInput: {
                        
                    }
                }
            }) // 실행하고
            console.log(result)
            result.data?.createProduct?._id
    
            // router.push("/05-08-dynamic-product-read/" + result.data.createProduct._id) 
            // 위에것과 아래것은 같다. 아래는 템플릿 리터럴이라고 부른다.
            router.push(`/05-08-dynamic-product-read/${result.data?.createProduct?._id}`)

            // 트라이를 시도하면서 내려오다가 실패하는 순간에 캐치로
        } catch(error){
            console.log(error.message)
            alert("오류입니다")
        }


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