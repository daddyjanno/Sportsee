import { H1, Head, Name } from '../../styles/UserInfos'
import PropTypes from 'prop-types'

/** Render a welcome message including user's name
 *
 * @param {object} props
 * @param {string} props.firstName
 * @returns {React.Component} A React component
 */
function UserInfos({ firstName }) {
    return (
        <Head>
            <H1>
                Bonjour <Name>{firstName}</Name>
            </H1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </Head>
    )
}

UserInfos.propTypes = {
    firstName: PropTypes.string.isRequired,
}

export default UserInfos
