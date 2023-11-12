import {
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
} from 'recharts'
import {
    LabelText,
    ScoreContainer,
    ScoreLabel,
    TextContainer,
} from '../../styles/UserScore'
import colors from '../../utils/style/colors'
import PropTypes from 'prop-types'

/** Render a Radial Bar Chart fo user's score
 *
 * @param {object} props
 * @param {number} props.score
 * @returns {React.Component} A React component
 */

function UserScore({ score }) {
    return (
        <ScoreContainer>
            <ScoreLabel>
                <TextContainer>
                    <LabelText>
                        <span>{score}%</span>
                        <br /> de votre objectif
                    </LabelText>
                </TextContainer>
            </ScoreLabel>
            <ResponsiveContainer>
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="80%"
                    outerRadius="80%"
                    startAngle={90}
                    endAngle={450}
                    barSize={10}
                    data={[{ score }]}
                >
                    <PolarAngleAxis
                        dataKey="score"
                        tick={false}
                        type="number"
                        domain={[0, 100]}
                    />
                    <RadialBar
                        dataKey="score"
                        fill={colors.primary}
                        cornerRadius={6}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </ScoreContainer>
    )
}

UserScore.propTypes = {
    score: PropTypes.number.isRequired,
}

export default UserScore
