export default function CounterLetPage(){

    function zzz(){
        const bbb = Number(document.getElementById("qqq").innerText) + 1
        document.getElementById("qqq").innerText = bbb
    }

    return (
        <>
            <div id="qqq">0</div>
            <button onClick={zzz}>카운트증가!!</button>
        </>
    )

}