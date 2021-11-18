import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  // const [myAddressDetail, setMyAddressDetail] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      <div>내주소: {myAddress}</div>
      <div>내우편번호: {myZonecode}</div>
      {/* <div>내 상세 주소: {myAddressDetail}</div> */}
      {/* 조건부 렌더링 */}
      {isModalVisible && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
