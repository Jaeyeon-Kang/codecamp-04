import BoardWrite from "../../../src/components/units/board/write4/BoardWrite.container";

export default function BoardsNewPage(){

    return(
        <>
            <BoardWrite isEdit={false} />
            {/* BoardWrite isEdit={false} 랑 같다. 둘다 똑같은 거짓이기 때문 */}
        </>
    )
}