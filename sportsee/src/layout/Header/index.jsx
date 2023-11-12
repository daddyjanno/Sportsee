import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Head, Logo, Nav } from '../../styles/Header/headerStyle'

function Header() {
    return (
        <Head>
            <Nav>
                <Logo src={logo} alt="logo Sportsee" />
                <NavLink to="/">Accueil</NavLink>
                <NavLink>Profil</NavLink>
                <NavLink>Réglages</NavLink>
                <NavLink>Communauté</NavLink>
            </Nav>
        </Head>
    )
}

export default Header
