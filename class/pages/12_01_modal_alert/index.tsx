import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSuccess() {
    Modal.success({
      content: "게시물 등록에 성공했습니다!!!",
    });
  }

  function onClickFail() {
    Modal.error({
      content: "게시물 등록에 실패했습니다.",
    });
  }

  return (
    <>
      <button onClick={onClickSuccess}>
        알림창 나타나기(성공했을 때 메세지)
      </button>
      <button onClick={onClickFail}>알림창 나타나기(실패했을 때 메세지)</button>
    </>
  );
}
