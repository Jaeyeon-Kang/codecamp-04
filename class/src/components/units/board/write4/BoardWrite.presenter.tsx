

interface IProps{
    aaa: (event: ChangeEvent<HTMLInputElement>) => void // 함수긴 함순데 리턴이 없는 애들
    bbb: (event: ChangeEvent<HTMLInputElement>) => void
    ccc: (event: ChangeEvent<HTMLInputElement>) => void
    zzz: () => void
    qqq: boolean
    ggg: boolean
    xxx: () => void
    data: any
}
export default function BoardWriteUI(props: IProps){

    return(
        <>
        작성자: <input type="text" onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer }/><br />
        제목: <input type="text" onChange={props.bbb} defaultValue={props.data?.fetchBoard.title }/><br />
        내용: <input type="text" onChange={props.ccc} defaultValue={props.data?.fetchBoard.contents }/><br /> /
        <button onClick={props.ggg ? props.xxx : props.zzz} qqq={props.qqq}> 게시물 {props.ggg ? "수정" : "등록"}하기 </button>
        </>
        // {props.ggg && <MyButton onClick={props.zzz} qqq={props.qqq}> 게시물 등록하기</MyButton>}
        // {props.ggg && <MyButton onClick={props.xxx} qqq={props.qqq}> 게시물 수정하기</MyButton>}
        )
} 

//defaultValue="aaaa" -> 기본값으로 바꿔주기

//XML => Extensible Markup Language
//HTML => Hyper Text Markup Language