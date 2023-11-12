import mockedData from '../data/mock'

async function getUserInformations(userId) {
    console.log('data come from mock')
    const { USER_MAIN_DATA } = mockedData
    const response = USER_MAIN_DATA.find((user) => user.id === +userId)
    if (response) {
        return { data: response }
    } else {
        return { error: `l'ID ${userId} n'existe pas` }
    }
}

async function getUserActivity(userId) {
    const { USER_ACTIVITY } = mockedData
    const response = USER_ACTIVITY.find((user) => user.userId === +userId)
    if (response) {
        return { data: response }
    } else {
        return { error: `l'ID ${userId} n'existe pas` }
    }
}

async function getUserAverageSessions(userId) {
    const { USER_AVERAGE_SESSIONS } = mockedData
    const response = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === +userId
    )
    if (response) {
        return { data: response }
    } else {
        return { error: `l'ID ${userId} n'existe pas` }
    }
}

async function getUserPerformance(userId) {
    const { USER_PERFORMANCE } = mockedData
    const response = USER_PERFORMANCE.find((user) => user.userId === +userId)
    if (response) {
        return { data: response }
    } else {
        return { error: `l'ID ${userId} n'existe pas` }
    }
}
const getMockedData = {
    getUserInformations,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
}

export default getMockedData
