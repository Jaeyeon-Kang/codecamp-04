import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            createdAt
        }
    }
`  
const DELETE_BOARD = gql`
    mutation ($number: Int){
        deleteBoard(number: $number) {
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    
`

const Column = styled.div`
    width: 20%;
    
`

export default function MapCheckboxPage() {
    const { data } = useQuery(FETCH_BOARDS) // [{number : 1, writer : ......}, { ..... }, { ....... }]
    const [ deleteBoard ] = useMutation(DELETE_BOARD)

    async function onClickDelete(event) {
        try{
            await deleteBoard({
                variables : {
                    number: Number(event.target.id)
                },
                refetchQueries: [{ query: FETCH_BOARDS}]
            })

        }catch(error){

            alert(error.message)
        }

    }

    return (

        <div>
            {/* 데이터가 있을 수도 있고 없을 수도 있어서 옵셔널 체인닝 사용 */}
            {data?.fetchBoards.map((el, index) => (
                // 유니크한 키값을 넣어줄떄는 el.number값을 넣어줘야지 되고 
                // index 값을 넣어주면 오류가 발생하지는 않지만 새로운 인덱스 값이라도 같은 모양의 숫자이므로
                // 제대로 작동되지가 않는다.
                <Row key={el.number}>
                    <Column >
                        <input type="checkbox"/>
                    </Column>
                    <Column>{index+1}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Column>
                </Row>
            ))}
        </div>

    )
}