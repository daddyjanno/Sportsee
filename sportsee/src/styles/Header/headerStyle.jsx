import styled from 'styled-components'

const Head = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;
    background-color: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
`
const Logo = styled.img`
    width: 180px;
    height: 60px;
`

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px 10px 20px;
    a {
        color: white;
        font-size: 24px;
        font-weight: 400;
        text-decoration: none;
    }
`

export { Head, Logo, Nav }
