import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  // const Postcode = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  // const [myAddressDetail, setMyAddressDetail] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };
  // 모달을 키는 함수 생성

  const handleComplete = (data: any) => {
    console.log("handleComplete Data", data);
    // handleComplete는 내가 검색한 주소를 가져오게 하려는 함수였음
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    // ()안에 들어있는 data는 바로 위 콘솔 찍었을때 나오는 것
    setIsModalVisible(false);
    // my address랑 my zonecode 불러오면 모달을 끈다
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  // okay버튼 눌렀을 때 모달을 끈다

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // cancel버튼 눌렀을때 모달을 끈다

  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      <div>내주소: {myAddress}</div>
      {/* setMyAddress(data.address) 에 담긴 값 */}
      <div>내우편번호: {myZonecode}</div>
      {/* setMyAddress(data.zonecode) 에 담긴 값 */}
      {isModalVisible && (
        // 모달이 켜진 상태라면
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          {/* visible={isModalVisible} 을 하면 내가 기존에 검색한 것을 버튼을 다시 눌렀을 때도 보여주기때문에 여기선 쓰지 않는다. 대신 조건부랜더링이랑 같이 씀. */}
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
        // 모달이 보이게 해주고, onOk와 onCancel에 각각 함수 부여
        // handleComplete는 내가 검색한 주소를 가져오게 하려는 함수
      )}
    </>
  );
}

// npm ->  react-daum-postcode 검색
