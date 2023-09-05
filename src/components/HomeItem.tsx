import styled from "styled-components"
import anime from "../assets/anime.png"

const HomeItem = () => {

    const StyledHomeItem = styled.div`
        width: 120px;
        height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        img {
          width: 80px;
          filter: saturate(500%) contrast(800%) brightness(500%) 
          invert(80%) sepia(50%) hue-rotate(120deg);
        }
        &:hover {
            background-color: white;
            color: black;
            transition: 0.3s;
            img {
              filter: saturate(0) contrast(0) brightness(0) 
              invert(0) sepia(0) hue-rotate(0)
            };
        }
    `

  return (
    <StyledHomeItem>
        <img src={anime}/>
        <p>item ggg</p>
    </StyledHomeItem>
  )
}

export default HomeItem