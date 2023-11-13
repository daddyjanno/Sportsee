import styled from 'styled-components'
import colors from '../../utils/style/colors'

const LineChartMainContainer = styled.div`
    position: relative;
    width: 250px;
    min-width: 250px;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    border-radius: 5px;
    overflow: hidden;
`
const LineChartTitle = styled.h3`
    position: absolute;
    z-index: 2;
    top: 10px;
    color: rgba(255, 255, 255, 0.75);
    /* padding-top: 20px; */
    /* padding-bottom: 10px; */
    font-weight: normal;
    font-size: 15px;
    /* background-color: transparent; */
`

export { LineChartMainContainer, LineChartTitle }
