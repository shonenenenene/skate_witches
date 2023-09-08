import styled from "styled-components"
import HomeItem from "./HomeItem"
import { pages }  from '../constants'

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
        {pages.map((e) => <HomeItem key={e.id} text={e.name} image={e.icon}/>)}
    </StyledHome>
  )
}

export default Home