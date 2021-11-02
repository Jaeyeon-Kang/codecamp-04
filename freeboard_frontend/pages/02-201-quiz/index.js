export default function IndexPage(){

    function zzz(){
       const bbb = Number(document.getElementById("qqq").innerText)+1
       document.getElementById("qqq").innerText=bbb
    }
    return(
        <>
        <div id="qqq">0</div> 
        <button onClick={zzz}>카운트 증가</button>
        </>
    )
}