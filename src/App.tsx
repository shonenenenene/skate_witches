import styled from "styled-components"
import Window from "./components/Window";
 import { GlobalStyle } from "./styles";


function App() {

  const StyledApp = styled.div`
   
   
  `

  return (
    <>
      <GlobalStyle/>
      <StyledApp>
        <Window/>
      </StyledApp>
    </>
  )
}

export default App
