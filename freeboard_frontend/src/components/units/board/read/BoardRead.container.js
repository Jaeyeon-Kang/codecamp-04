import { useRouter } from "next/router"
import BoardReadUI from "./BoardRead.presenter"

export default function BoardRead(){


    const router = useRouter()

    console.log(router.query.aaa)
   

    return(
      <BoardReadUI 
        ppp={router.query.ppp}/>
    )


}
