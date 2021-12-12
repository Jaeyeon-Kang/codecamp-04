import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  ProductName,
  ProductRemark,
  ProductContents,
  ProductPrice,
  Button,
} from "./MarketDetail.styles";
import Dompurify from "dompurify";
import { Modal, Radio, Upload } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketDetailPresenter(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56f2f6456a4bc97487f111ba4669797c&libraries=services";
    document.head.appendChild(script); // head에 script를 넣음

    // https://apis.map.kakao.com/web/documentation/#load
    // query string: 위 사이트에서 autoload=false를 넣으라고 했는데 뒤에 appkey도 넣어야 하기에 중간에 &을 넣어 합쳐준다.

    // script가 로드 된 후 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48481, 126.89663), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.myAddress, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">직거래 장소</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [props.myAddress]);

  return (
    <Wrapper>
      <Title>상품상세보기</Title>
      <InputWrapper>
        <Label>상품명</Label>
        <ProductName>{props.data?.fetchUseditem?.name}</ProductName>
      </InputWrapper>
      <InputWrapper>
        <Label>가격</Label>
        <ProductPrice>{props.data?.fetchUseditem?.price}</ProductPrice>
      </InputWrapper>
      <InputWrapper>
        <Label>한줄요약</Label>
        <ProductRemark>{props.data?.fetchUseditem?.remarks}</ProductRemark>
      </InputWrapper>
      <InputWrapper>
        <Label>상품설명</Label>
        {process.browser ? (
          <ProductContents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(props.data?.fetchUseditem?.contents)
              ),
            }}
          />
        ) : (
          <ProductContents />
        )}
      </InputWrapper>
      <button onClick={props.onToggleModal}>우편번호 검색</button>
      <div>
        {props.isOpen && (
          <Modal
            title="우편번호 검색"
            visible={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
            // style={{ backgroundColor: "yellow" }}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
      </div>
      <Button onClick={props.onClickMarketList}>목록으로</Button>
      <Button onClick={props.onClickMarketUpdate}>수정하기</Button>
      <Button onClick={props.onClickDelete}>삭제하기</Button>
      <Button onClick={props.onClickPurchase}>구매하기</Button>
    </Wrapper>
  );
}
