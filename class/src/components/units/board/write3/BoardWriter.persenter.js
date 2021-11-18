import { MyInput, MyButton } from './BoardWriter.styles'

export default function BoardWriteUI(props) {

    return (
        <>
          작성자 : <MyInput type="text" onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer}/><br/>
          제목 : <MyInput type="text" onChange={props.bbb} defaultValue={props.data?.fetchBoard.title}/><br/>
          내용 : <MyInput type="text" onChange={props.qqq} defaultValue={props.data?.fetchBoard.contents}/><br/>
          {/* 속성을 여러 개 넣을 때 객체로 만들어서 다른 페이지에 적용을 시켜준다. */}
          {/* 삼항 연산자를 활용한 버튼 관리 */}
          {/* <MyButton MyQqq={props.MyQqq} onClick={props.isEdit ? props.xxx : props.zzz}>게시물 {props.isEdit ? "수정" : "등록"}하기!!</MyButton> */}

          {!props.isEdit && <MyButton onClick={props.zzz} qqq={props.qqq}>게시물 등록하기</MyButton>}
          {props.isEdit && <MyButton onClick={props.xxx} qqq={props.qqq}>게시물 수정하기</MyButton>}
        </>
    )
}