import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 30px;
    left: -10px;
    background-color: white;

    /* &::before {
        content: '';
        position: absolute;
        top: -250px;
        bottom: -200px;
        left: -10px;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 2;
        width: 30px;
    } */
`
const StyledText = styled.p`
    color: black;
    font-size: 10px;
    font-weight: bold;
`

export { Container, StyledText }
