import { Icon, KeyDataWrapper, TextWrapper } from '../../styles/KeyData'
import PropTypes from 'prop-types'

/** Render the data for each Card of KeyData
 *
 * @param {object} props
 * @param {string} props.icon
 * @param {string} props.title
 * @param {string} props.text
 * @returns {React.Component} A React component
 */

function KeyData({ icon, title, text }) {
    return (
        <KeyDataWrapper>
            <Icon src={icon} alt={text} />
            <TextWrapper>
                <h2>{title}</h2>
                <p>{text}</p>
            </TextWrapper>
        </KeyDataWrapper>
    )
}

KeyData.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default KeyData
