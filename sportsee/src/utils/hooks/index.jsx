import { useEffect, useState } from 'react'
import DataModeling from '../../utils/dataModeling'
import getAPIData from '../apiCall'
import getMockedData from '../mockedDataCall'

const modeledDatas = new DataModeling()

/** Custom hook that fetch data, from API or mocked datas, regarding the Context provided
 *
 * @param {boolean} isMockedData - The context, given by the user with the switch button on the Home page
 * @param {string} type - The category of data needed ('USER_MAIN_DATA', 'USER_ACTIVITY', 'USER_AVERAGE_SESSIONS' or 'USER_PERFORMANCE')
 * @param {number} id - The id of the user, so far 12 or 18
 * @returns {Object}
 */
export function useFetch(isMockedData, type, id) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        async function datas() {
            let source

            isMockedData ? (source = getMockedData) : (source = getAPIData)
            try {
                setLoading(true)
                switch (type) {
                    case 'USER_MAIN_DATA':
                        const infos = await source.getUserInformations(id)
                        if (infos.error) {
                            setError(infos.error)
                        } else {
                            setData(modeledDatas.informations(infos.data))
                        }
                        break
                    case 'USER_ACTIVITY':
                        const activity = await source.getUserActivity(id)
                        setData(modeledDatas.activity(activity.data))
                        break
                    case 'USER_AVERAGE_SESSIONS':
                        const avgSessions = await source.getUserAverageSessions(
                            id
                        )
                        setData(modeledDatas.averageSessions(avgSessions.data))
                        break
                    case 'USER_PERFORMANCE':
                        const performance = await source.getUserPerformance(id)
                        setData(modeledDatas.performance(performance.data))
                        break
                    default:
                        break
                }
            } catch (error) {
                setError(error)
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        datas()
    }, [isMockedData, type, id])

    return { data, error, isLoading }
}
