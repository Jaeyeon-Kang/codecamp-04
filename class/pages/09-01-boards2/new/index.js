import BoardWrite from "../../../src/components/units/board/write3/BoardWrite.container";

// 08-05가 글 쓰기 페이지, 08-06이 수정하기 페이지인데 수정하려면 id가 필요하니까 08-06에 [MyNumber]이랑 edit 붙인거임.
export default function BoardsNewPage(){

    return(
         <BoardWrite isEdit={false} />

    )


} 