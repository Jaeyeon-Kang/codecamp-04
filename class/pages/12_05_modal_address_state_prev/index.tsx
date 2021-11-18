import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  // const [myAddressDetail, setMyAddressDetail] = useState("");

  // 리펙토링(비슷한 것을 한 데 모아 다시 작성하여 적용시킨다.)
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>우편번호 검색</Button>
      <div>내주소: {myAddress}</div>
      <div>내우편번호: {myZonecode}</div>
      {/* <div>내 상세 주소: {myAddressDetail}</div> */}
      {/* 조건부 렌더링 */}
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
