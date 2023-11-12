import { NavLink } from 'react-router-dom'
import bike from '../../assets/bike.png'
import fitness from '../../assets/fitness.png'
import relax from '../../assets/relax.png'
import swim from '../../assets/swim.png'
import {
    Picto,
    PictoContainer,
    SidebarContainer,
    StyledText,
} from '../../styles/Sidebar'

function Sidebar() {
    return (
        <SidebarContainer>
            <PictoContainer>
                <NavLink to="#">
                    <Picto src={bike} alt="" />
                </NavLink>
                <NavLink to="#">
                    <Picto src={fitness} alt="" />
                </NavLink>
                <NavLink to="#">
                    <Picto src={relax} alt="" />
                </NavLink>
                <NavLink to="#">
                    <Picto src={swim} alt="" />
                </NavLink>
            </PictoContainer>
            <StyledText>Copiryght, SportSee 2020</StyledText>
        </SidebarContainer>
    )
}

export default Sidebar
