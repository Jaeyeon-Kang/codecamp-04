import {
  UploadImage,
  UploadButton,
  UploadImageHidden,
} from "./Uploads02.styles";

export default function Uploads02UI(props) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={props.onClickUploadImage}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <UploadButton onClick={props.onClickUploadImage}>
          <div>상품이미지 등록</div>
        </UploadButton>
      )}
      <UploadImageHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeImage}
      />
    </>
  );
}
