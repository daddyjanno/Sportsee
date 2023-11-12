import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, UserContainer, User } from '../../styles/Homepage'
import { DataContext } from '../../utils/context'
import Switch from '../../components/Switch'

/** The Homepage let us choose between the 2 users in DB, and select between API or mocked datas
 *
 * @returns {React.JSX}
 */
function Homepage() {
    const { isMockedData, toggleMockedData } = useContext(DataContext)

    return (
        <Container>
            <h2>Select user</h2>
            <UserContainer>
                <NavLink to="user/12">
                    <User>Karl Dovineau</User>
                </NavLink>
                <NavLink to="user/18">
                    <User>Cecilia Ratorez</User>
                </NavLink>
            </UserContainer>
            <React.Fragment>
                <Switch
                    label="Mocked Data"
                    checked={isMockedData}
                    onChange={toggleMockedData}
                    optionLabels={['API', 'mocked']}
                />
            </React.Fragment>
        </Container>
    )
}

export default Homepage
