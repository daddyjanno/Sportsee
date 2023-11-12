import {
    Container,
    StyledText,
} from '../../styles/AverageSessionsToolType/index'
import PropTypes from 'prop-types'

/** Render a custom tooltip for Average Sessions Charts
 *
 * @param {object} props
 * @param {bool} props.active
 * @param {array} props.payload
 * @returns {React.Component} A React component
 */
export const AverageSessionsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <Container>
                <StyledText>{payload[0].value}min</StyledText>
            </Container>
        )
    }

    return null
}

AverageSessionsTooltip.propTypes = {
    /**
     * Is the tootlip active?
     */
    active: PropTypes.bool,
    /**
     * The payload of the tooltip
     */
    payload: PropTypes.arrayOf(PropTypes.object),
}
