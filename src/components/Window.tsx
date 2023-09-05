import styled from 'styled-components'
import NavBar from './NavBar'
import Home from './Home'


const Window = () => {

    const StyledWindow = styled.div`
        background-color: rgb(0, 0, 233);
        max-width: 1050px;
        max-height: 700px;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        border: 2px solid whitesmoke;
        border-radius: 8px;
    `

  return (
    <StyledWindow>
      <NavBar/>
      <Home/>
    </StyledWindow>
  )
}

export default Window