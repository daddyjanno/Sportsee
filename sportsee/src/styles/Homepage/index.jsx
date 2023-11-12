import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const UserContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 30px;
`
const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 150px;
    border: 1px solid black;
    border-radius: 8px;
    color: black;
    text-decoration: none;
`

export { Container, UserContainer, User }
