import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    height: 40vh;
    color: black;
    padding: 150px 0px;
    @media screen and (max-width: 600px) {
        width: 80%;
        margin: 50px auto;
        height: 60vh;
        gap: 0px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: underline;
    color: black;
`
const StyledTitle = styled.h1`
    font-size: 280px;
    font-weight: bold;
    margin: 0;
    @media screen and (max-width: 600px) {
        font-size: 96px;
    }
`
const StyledText = styled.p`
    text-align: center;
`

export { StyledContainer, StyledLink, StyledTitle, StyledText }
