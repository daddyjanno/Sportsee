import { useContext } from 'react'
import { useParams } from 'react-router'
import colors from '../../utils/style/colors'
import { UserActivityTooltip } from '../UserActivityTooltype/index'
import {
    BarChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
    Tooltip,
    Bar,
} from 'recharts'
import {
    BarChartMainContainer,
    ColorSample,
    Container,
    Info,
    LegendContainer,
    Text,
    Title,
} from '../../styles/UserActivity'
import { DataContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

/** Renders the charts for user's activity, regarding user's weight and burned calories
 *
 * @returns {React.JSX}
 */
function UserActivity() {
    const { isMockedData } = useContext(DataContext)
    const { id } = useParams()

    const { data } = useFetch(isMockedData, 'USER_ACTIVITY', id)

    return (
        <BarChartMainContainer>
            <Container>
                <Title>Activité quotidienne</Title>
                <LegendContainer>
                    <Info>
                        <ColorSample color={colors.primary} />
                        <Text>Poids (kg)</Text>
                    </Info>
                    <Info>
                        <ColorSample color="black" />
                        <Text>Calories brûlées (kCal)</Text>
                    </Info>
                </LegendContainer>
            </Container>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barGap={8}
                    barCategoryGap={2}
                    barSize={7}
                    radius={[50, 50, 0, 0]}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis
                        dataKey="index"
                        tickLine={false}
                        tick={{ fontSize: 14, stroke: '#9B9EAC' }}
                        dy={15}
                    />
                    <YAxis
                        dataKey="kilogram"
                        yAxisId="kilogram"
                        orientation="right"
                        type="number"
                        domain={['dataMin - 2', 'dataMax + 1']}
                        tickCount={5}
                        tick={{ fontSize: 14 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        dataKey="calories"
                        yAxisId="calories"
                        orientation="right"
                        type="number"
                        domain={['dataMin - 20', 'dataMax + 10']}
                        hide="true"
                    />
                    <Tooltip content={<UserActivityTooltip />} />
                    <Bar
                        dataKey="kilogram"
                        yAxisId="kilogram"
                        fill="black"
                        stroke="black"
                        radius={[50, 50, 0, 0]}
                        barSize={7}
                    />
                    <Bar
                        dataKey="calories"
                        yAxisId="calories"
                        fill={colors.primary}
                        stroke={colors.primary}
                        radius={[50, 50, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </BarChartMainContainer>
    )
}

export default UserActivity
