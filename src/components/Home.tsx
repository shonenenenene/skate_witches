import styled from "styled-components"
import HomeItem from "./HomeItem"

const Home = () => {

    const StyledHome = styled.main`
        padding: 30px;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        gap: 15px 30px;
        justify-items: center;
        @media (max-width: 970px) {
          grid-template-columns: repeat(4,1fr);
        }
        @media (max-width: 632px) {
          grid-template-columns: repeat(2,1fr);
        }
    `
  return (
    <StyledHome>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
        <HomeItem/>
    </StyledHome>
  )
}

export default Home