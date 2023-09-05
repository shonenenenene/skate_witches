import styled from 'styled-components'

const CloseButton = () => {

    const StyledCloseButton = styled.button`
        font-size: 25px;
        color: white;
    `

  return (
    <StyledCloseButton>
        &times;
    </StyledCloseButton>
  )
}

export default CloseButton