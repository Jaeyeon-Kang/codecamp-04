import { useMutation, gql } from '@apollo/client'


const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`


export default function GraphqlMutationBoardPage() {

    const [ createBoard ] = useMutation(CREATE_BOARD)
    
    

    async function GraphqlGet() {

        const result = await createBoard({
            variables : { writer: "맹구", title:"소풍준비", contents:"소풍준비물들"}
        })
        console.log(result)

    }
        return(

            <button onClick={GraphqlGet}>Graphql-API 요청하기</button>
        )
}