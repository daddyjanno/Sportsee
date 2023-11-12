import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/** Render a Card (div) containing user's firstname and lastname
 *
 * @param {object} props
 * @param {string} props.firstName
 * @param {string} props.lastName
 * @param {number} props.userId
 * @returns {React.Component} A React component
 */

function Card({ firstName, lastName, userId }) {
    return (
        <div>
            <Link to={`user/${userId}`}>
                <h2>
                    {firstName} {lastName}
                </h2>
            </Link>
        </div>
    )
}

Card.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
}

export default Card
