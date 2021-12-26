import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid yellow;
  /* width: 500px;
  height: 500px; */
`;

export default function LibraryYoutubePage() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={500}
      height={500}
      previewTabIndex={0}
      controls
    />
  );
}

// next 에는 import React from 'react'가 자동으로 들어가있어서 안써도 된다. 나중에 라이브라리 쓸 때도 참고하자.
// https://www.npmjs.com/package/react-player
// controls 먹이면 재생바 불러낼 수 있다. docs를 잘읽자.
