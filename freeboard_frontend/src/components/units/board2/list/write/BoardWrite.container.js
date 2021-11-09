import BoardWriteUI from "./BoardWrite.presenter"
import { useRouter } from 'next/router' 


export default function BoardWrite(){
    
    const router = useRouter()

    function onClickMove1(){
        router.push("/05-06-dynamic-board-read/$[id]")
    }
    function onClickMove2(){
        router.push("/05-06-dynamic-board-read/$[id]")
    }
    function onClickMove3(){
        router.push("/05-06-dynamic-board-read/$[id]")
    }

    return(
       <BoardWriteUI 
            aaa={onClickMove1}
            bbb={onClickMove2}
            ccc={onClickMove3}
            />
    )
}

