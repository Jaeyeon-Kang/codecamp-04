import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달 창 열기</Button>
      <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
        안녕하세요!! 비밀번호 입력: <input type="password" />
      </Modal>
    </>
  );
}
