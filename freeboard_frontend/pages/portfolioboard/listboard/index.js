
import { useRouter } from "next/router"
import ListBoardPage from "../../../src/components/units/board/listboard/listBoard.container"

export default function DetailBoardPage() {
  const router = useRouter()

  return (
    <ListBoardPage />
  )
}