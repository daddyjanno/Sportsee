import styled from 'styled-components'

const SidebarContainer = styled.div`
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 90px;
    width: 90px;
    height: 100vh;
    background-color: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
`
const PictoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Picto = styled.img`
    width: 64px;
    height: 64px;
`
const StyledText = styled.p`
    color: white;
    font-size: 12px;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
`

export { SidebarContainer, PictoContainer, Picto, StyledText }
