import styled from "styled-components"
import HomeItem from "./HomeItem"

const Home = () => {

    const StyledHome = styled.main`
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 20px;
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
        <HomeItem/>
        <HomeItem/>
    </StyledHome>
  )
}

export default Home