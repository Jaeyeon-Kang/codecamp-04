import { RectangleOutlined } from "@mui/icons-material";
import { HeaderNu, HeaderTium, Rectangle, LogoWrapper } from "./Header.styles";

export default function HeaderUI() {
  return (
    <>
      <LogoWrapper>
        <Rectangle></Rectangle>
        <HeaderNu>nu</HeaderNu>
        <HeaderTium>tium</HeaderTium>
      </LogoWrapper>
    </>
  );
}
