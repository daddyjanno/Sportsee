import { useContext } from 'react'
import { useParams } from 'react-router'
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from 'recharts'
import colors from '../../utils/style/colors'
import { PerfContainer } from '../../styles/UserPerf'
import { DataContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

/** Renders the charts for user's performance
 *
 * @returns {React.JSX}
 */
function UserPerformance() {
    const { isMockedData } = useContext(DataContext)
    const { id } = useParams()

    const { data } = useFetch(isMockedData, 'USER_PERFORMANCE', id)
    return (
        <PerfContainer>
            <ResponsiveContainer>
                <RadarChart data={data} margin={{ left: 15, right: 15 }}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ fontSize: '12px' }}
                    />
                    <Radar
                        dataKey="value"
                        fill={colors.primary}
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </PerfContainer>
    )
}

export default UserPerformance
