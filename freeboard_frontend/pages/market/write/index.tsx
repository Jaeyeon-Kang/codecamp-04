import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketWriteContainer from "../../../src/components/units/market/write/MarketWrite.container";

// export default function MarketBoardPage() {
//   return <MarketWriteContainer />;
// }

const MarketBoardPage = () => {
  return <MarketWriteContainer />;
};
export default withAuth(MarketBoardPage);
