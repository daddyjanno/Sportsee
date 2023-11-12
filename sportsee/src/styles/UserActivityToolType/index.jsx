import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 60px;
    height: 70px;
    background-color: ${colors.primary};
`
const StyledText = styled.p`
    color: white;
    font-size: 10px;
    font-weight: bold;
    /* margin-top: 8px; */
`

export { Container, StyledText }
