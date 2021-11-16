import BoardWrite from "../../../src/components/units/board/write3/BoardWrite.container";

export default function BoardsNewPage(){

    return(
        <>
            <BoardWrite isEdit={""} />
            {/* BoardWrite isEdit={false} 랑 같다. 둘다 똑같은 거짓이기 때문 */}
        </>
    )
}