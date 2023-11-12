import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Head = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    padding: 30px;
`
const H1 = styled.h1`
    font-weight: 600;
    font-size: 48px;
`
const Name = styled.span`
    color: ${colors.primary};
`

export { Head, H1, Name }
