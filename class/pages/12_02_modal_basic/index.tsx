import { useState } from "react";
import { Modal, Button } from "antd";
import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const ModalBasicPage = () => {
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

  const MyYoutube = styled(ReactPlayer)`
    border: 10px solid yellow;
  `;

  return (
    <>
      <Button style={{ height: "100px" }} onClick={showModal}>
        모달 창 열기
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호 입력: <input type="password" />
        <MyYoutube
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width={200}
          height={200}
          previewTabIndex={0}
          controls
        />
      </Modal>
    </>
  );
};

export default ModalBasicPage;
