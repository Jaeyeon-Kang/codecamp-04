import MyBoardWrite from "../../src/components/units/21-context-api/MyBoardWrite.container";
import { createContext } from "react";

export const MyContext = createContext(null)
export default function ContextAPIPage() {
  const myValue={

    isEdit: true,
  }
  
  
    return (
  <MyContext.Provider value={myValue}>  
                    <MyBoardWrite  />






  </MyContext.Provider>;
    )
}
