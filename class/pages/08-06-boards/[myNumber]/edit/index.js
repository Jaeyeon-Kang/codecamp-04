// 08-05가 글 쓰기 페이지, 08-06이 수정하기 페이지인데 수정하려면 id가 필요하니까 08-06에 [MyNumber]이랑 edit 붙인거임.
import BoardWrite from '../../../../src/components/units/board/write2/BoardWrite.container'
export default function BoardsEditPage(){

    return(
         <BoardWrite isEdit={true} />

    )


}