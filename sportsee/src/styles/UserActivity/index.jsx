import styled from 'styled-components'
import colors from '../../utils/style/colors'

const BarChartMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: ${colors.backgroundLight};
    padding: 20px 0px;
`
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2.5rem;
    margin-right: 1.5rem;
`
const LegendContainer = styled.div`
    display: flex;
    gap: 30px;
`
const ColorSample = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`
const Title = styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253a;
`
const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: black;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export {
    BarChartMainContainer,
    Container,
    LegendContainer,
    ColorSample,
    Title,
    Text,
    Info,
}
