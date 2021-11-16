import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const handleComplete = (data: any) => {
    console.log(data);
  };

  return <DaumPostcode onComplete={handleComplete} />;
}
