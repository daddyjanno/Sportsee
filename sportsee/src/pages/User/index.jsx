import { useContext } from 'react'
import { useParams } from 'react-router'
import {
    ChartsContainer,
    Container,
    ErrorAndLoaderContainer,
    KeyDataContainer,
    Main,
    WidgetContainer,
} from '../../styles/User'
import KeyData from '../../components/KeyData'
import { Loader } from '../../utils/style/Atoms'
import UserInfos from '../../components/UserInfos'
import UserActivity from '../../components/UserActivity'
import AverageSessions from '../../components/AverageSessions'
import UserPerformance from '../../components/UserPerf'
import UserScore from '../../components/UserScore'
import { DataContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

/** Render the User's dashboard
 *
 * @returns {React.JSX}
 */
function User() {
    const { isMockedData } = useContext(DataContext)
    const { id } = useParams()

    const { data, error, isLoading } = useFetch(
        isMockedData,
        'USER_MAIN_DATA',
        id
    )

    return error ? (
        <ErrorAndLoaderContainer>
            <span>{error}</span>
        </ErrorAndLoaderContainer>
    ) : isLoading ? (
        <ErrorAndLoaderContainer>
            <Loader />
        </ErrorAndLoaderContainer>
    ) : data ? (
        <Main>
            <UserInfos firstName={data.userInfos.firstName} />
            <Container>
                <ChartsContainer>
                    <UserActivity />
                    <WidgetContainer>
                        <AverageSessions />
                        <UserPerformance />
                        <UserScore score={data.score} />
                    </WidgetContainer>
                </ChartsContainer>
                <KeyDataContainer>
                    {data.keyData.map((nutri) => {
                        return (
                            <KeyData
                                key={nutri.name}
                                icon={nutri.icon}
                                title={nutri.count + nutri.unit}
                                text={nutri.name}
                            />
                        )
                    })}
                </KeyDataContainer>
            </Container>
        </Main>
    ) : (
        <ErrorAndLoaderContainer>
            <Loader />
        </ErrorAndLoaderContainer>
    )
}

export default User
