export async function getUserInformations(userId) {
    try {
        const response = await fetch(`http://localhost:8000/user/${userId}`)
        if (!response.ok) {
            return { data: null, error: `l'ID ${userId} n'existe pas` }
        }
        const data = await response.json()
        console.log('data come from API')
        return data
    } catch (error) {
        return { data: null, error: `Erreur API` }
    }
}
export async function getUserActivity(userId) {
    try {
        const response = await fetch(
            `http://localhost:8000/user/${userId}/activity`
        )
        if (!response.ok) {
            return { data: null, error: `l'ID ${userId} n'existe pas` }
        }
        const data = await response.json()
        return data
    } catch (error) {
        return { data: null, error: `Erreur API` }
    }
}
export async function getUserAverageSessions(userId) {
    try {
        const response = await fetch(
            `http://localhost:8000/user/${userId}/average-sessions`
        )
        if (!response.ok) {
            return { data: null, error: `l'ID ${userId} n'existe pas` }
        }
        const data = await response.json()
        return data
    } catch (error) {
        return { data: null, error: `Erreur API` }
    }
}
export async function getUserPerformance(userId) {
    try {
        const response = await fetch(
            `http://localhost:8000/user/${userId}/performance`
        )
        if (!response.ok) {
            return { data: null, error: `l'ID ${userId} n'existe pas` }
        }
        const data = await response.json()
        return data
    } catch (error) {
        return { data: null, error: `Erreur API` }
    }
}

const getAPIData = {
    getUserInformations,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
}

export default getAPIData
