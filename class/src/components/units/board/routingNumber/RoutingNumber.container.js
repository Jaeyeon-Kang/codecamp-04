import { useRouter } from "next/router"
import RoutingNumberUI from "./RoutingNumber.presenter"

export default function RoutingNumber(){
    const router = useRouter()

    function onClickMove1(){
        router.push("/05-06-dynamic-routed-number/1")
    }

    function onClickMove2(){
        router.push("/05-06-dynamic-routed-number/2")
    }

    function onClickMove3(){
        router.push("/05-06-dynamic-routed-number/3")
    }

    return(
        <>
        <RoutingNumberUI 
            aaa={onClickMove1}
            bbb={onClickMove2}
            ccc={onClickMove3}
        />
        </>
    )
}