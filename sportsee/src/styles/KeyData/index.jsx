import styled from 'styled-components'
import colors from '../../utils/style/colors'

const KeyDataWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 20px;
    gap: 20px;
    height: 150px;
    width: 260px;

    background-color: ${colors.backgroundLight};
`
const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    font-size: 20px;
    p {
        color: ${colors.ternary};
        font-size: 14px;
    }
`
const Icon = styled.img`
    height: 80px;
    width: 80px;
`

export { KeyDataWrapper, TextWrapper, Icon }
