import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");

  // 리펙토링(비슷한 것을 한 데 모아 다시 작성하여 적용시킨다.)
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log("상세주소 있는지 보려고", data);
    // 데이터 안에 뭐 있는지 확인
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setMyAddressDetail(data.addressEnglish);
    // 상세주소 딱히 없어서 영어주소로 대체하기로 함..
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>우편번호 검색</Button>
      <div>내주소: {myAddress}</div>
      <div>내우편번호: {myZonecode}</div>
      <div>내 영어 주소: {myAddressDetail}</div>
      {/* 조건부 렌더링. visible={true} 랑 조건부렌더링을 같이 쓰면 기존 검색이 다시 버튼 클릭했을때 안보일 수 있음. 만약 보이게 하려면..  visible={isModalVisible} */}
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
