// //1-1


// export default function QuizPage(){

//     function zzz(){
//         document.getElementById("qqq").innerText="반갑습니다"
//     }


//     return(
//         <>
//         <button onClick={zzz} id="qqq">안녕하세요</button>
//         </>
//     )
// }



// //1-2

import {useState} from 'react' 


export default function QuizPage(){
    
    const [zzz, setZzz] = useState("안녕하세요")
    function qqq(){
        setZzz("반갑습니다")
    }
   

    return (
        <> 
        
        <button onClick={qqq}>{zzz}</button>
        </>
    )
 
}
