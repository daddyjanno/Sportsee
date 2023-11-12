import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ScoreContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 250px;
    width: 250px;
    aspect-ratio: 1/1;
    /* height: 260px; */
    background-color: ${colors.backgroundLight};
    border-radius: 5px;
`
const ScoreLabel = styled.div`
    position: absolute;
    width: 76%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    aspect-ratio: 1/1;
    background-color: white;
`
const TextContainer = styled.div`
    width: 40%;
`
const LabelText = styled.p`
    font-size: 16px;
    color: ${colors.backgroundDark};
    span {
        color: black;
        font-size: 26px;
        font-weight: bold;
    }
`

export { ScoreContainer, ScoreLabel, TextContainer, LabelText }
