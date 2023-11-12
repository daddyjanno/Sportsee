import { useContext } from 'react'
import {
    Container,
    InnerSpan,
    SwitchSpan,
    Input,
    Label,
    ToggleSwitch,
} from '../../styles/Switch'
import PropTypes from 'prop-types'
import { DataContext } from '../../utils/context'

/** Return a switch button to change API datas to mocked datas
 *
 * @param {object} props
 * @param {string} props.label
 * @param {array} props.optionLabels
 * @returns {React.Component} A React component
 */
function Switch({ label, optionLabels }) {
    const { isMockedData, toggleMockedData } = useContext(DataContext)
    return (
        <Container>
            {label}{' '}
            <ToggleSwitch>
                <Input
                    type="checkbox"
                    name={label}
                    id={label}
                    checked={isMockedData}
                    onChange={toggleMockedData}
                />
                <Label className="label" htmlFor={label}>
                    <InnerSpan
                        className="inner"
                        data-yes={optionLabels[1]}
                        data-no={optionLabels[0]}
                    />
                    <SwitchSpan className="switch" />
                </Label>
            </ToggleSwitch>
        </Container>
    )
}

Switch.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    optionLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Switch
