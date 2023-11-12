import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    padding-left: 100px;
    gap: 50px;
`
const ErrorAndLoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    padding-left: 100px;
`
const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    width: 100%;
    padding-bottom: 50px;
`
const ChartsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 70%;
    min-width: 750px;
`
const WidgetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-width: 750px;
`
const KeyDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

export {
    Main,
    Container,
    ChartsContainer,
    WidgetContainer,
    KeyDataContainer,
    ErrorAndLoaderContainer,
}
