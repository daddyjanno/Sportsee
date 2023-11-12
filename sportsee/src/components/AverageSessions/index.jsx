import { useContext } from 'react'
import { useParams } from 'react-router'
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import colors from '../../utils/style/colors'
import { AverageSessionsTooltip } from '../AverageSessionsTooltype/index'
import {
    LineChartMainContainer,
    LineChartTitle,
} from '../../styles/AverageSessions/AverageSessionsStyle'
import { DataContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'
import CustomCursor from '../CustomCursor'

/** Renders a Linechart for user's average length sessions
 *
 * @returns {React.Component} A React component
 */
function AverageSessions() {
    const { isMockedData } = useContext(DataContext)
    const { id } = useParams()

    const { data } = useFetch(isMockedData, 'USER_AVERAGE_SESSIONS', id)

    return (
        <LineChartMainContainer>
            <LineChartTitle>Durée moyenne des sessions</LineChartTitle>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid
                        fill={colors.primary}
                        stroke={colors.primary}
                    />
                    <XAxis
                        dataKey="day"
                        stroke="rgba(255,255,255,0.75)"
                        padding={{ left: 20, right: 20 }}
                        tick={{ fontSize: 12, fontWeight: 500 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[0, 'dataMax + 10']}
                        hide={true}
                        padding={{ top: 0, bottom: 20 }}
                    />
                    <Tooltip
                        content={<AverageSessionsTooltip />}
                        cursor={<CustomCursor />}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.75)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 3, strokeWidth: 2, stroke: 'white' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </LineChartMainContainer>
    )
}

export default AverageSessions
