import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateProductArgs } from '../../src/commons/types/generated/types'

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

    const router = useRouter()

    const [ myseller, setMySeller ] = useState("")
    const [ mypdname, setMyPdName ] = useState("")
    const [ mypddetail, setMyPdDetail ] = useState("")
    const [ mypdprice, setMyPdprice ] = useState("")

    const [ createProduct ] = useMutation<Pick<IMutation, 'createProduct'>, IMutationCreateProductArgs>(CREATE_PRODUCT)

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
   
    async function zzz() {

        // backend로 보내는 원래 메세지를 시도해 보는 영역
        try {

            const result = await createProduct({
                variables: {
                    seller:myseller,
                    createProductInput: {
                        detail:mypddetail,
                        name:mypdname,
                        price:Number(mypdprice)
                    }
                }
            })
            console.log(result)
            // 상세 페이지를 id로 받아서 그 아이디를 통해서 페이지 이동을 한다.
            // result.data.createProduct._id
    
            // router.push('/05_08_dynamic_product_read/' + result.data.createProduct._id) // 가장 기초
            // + 없이 지정하는 법 / 템플릿 리터럴
            router.push(`/05_08_dynamic_product_read/${result.data?.createProduct?._id}`)
            // router.push(`/05_08_dynamic_product_read/result.data.createProduct._id`) // 잘못된 표기

        // try 영역을 시도하다가 에러가 났을 경우 발생하게 될 catch 영역    
        } catch(error) {

            console.log(error.message) // 또는 alert로 경고 메세지를 받아올 수 있다.

        }

    }
    
    return (
        <>
          판매자 : <input type="text" onChange={onChangeMySeller}/><br/>
          상품명 : <input type="text" onChange={onChangeMyPdName}/><br/>
          상품내용 : <input type="text" onChange={onChangeMyPdDetail}/><br/>
          상품가격 : <input type="text" onChange={onChangeMyPdPrice}/><br/>
          <button onClick={zzz}>상품 등록하기!!</button>
        </>
    )
}