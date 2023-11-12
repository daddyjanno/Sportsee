import { Container, StyledText } from '../../styles/UserActivityToolType/index'
import PropTypes from 'prop-types'

/** Render a custom tooltip for User Activity Charts
 *
 * @param {object} props
 * @param {bool} props.active
 * @param {array} props.payload
 * @returns {React.Component} A React component
 */
export const UserActivityTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <Container>
                <StyledText>{payload[0].value}kg</StyledText>
                <StyledText>{payload[1].value}kCal</StyledText>
            </Container>
        )
    }

    return null
}
UserActivityTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
}
