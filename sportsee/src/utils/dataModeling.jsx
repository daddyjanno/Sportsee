import caloriesIcon from '../assets/calories-icon.png'
import proteinIcon from '../assets/protein-icon.png'
import carbsIcon from '../assets/carbs-icon.png'
import fatIcon from '../assets/fat-icon.png'

class DataModeling {
    informations(datas) {
        const { id, userInfos, todayScore, score, keyData } = datas

        return {
            id,
            userInfos: {
                firstName: userInfos.firstName,
                lastName: userInfos.lastName,
                age: userInfos.age,
            },
            score: Math.floor((todayScore || score) * 100),
            keyData: [
                {
                    icon: caloriesIcon,
                    name: 'Calories',
                    count: keyData.calorieCount,
                    unit: 'kCal',
                },
                {
                    icon: proteinIcon,
                    name: 'Proteines',
                    count: keyData.proteinCount,
                    unit: 'g',
                },
                {
                    icon: carbsIcon,
                    name: 'Glucides',
                    count: keyData.carbohydrateCount,
                    unit: 'g',
                },
                {
                    icon: fatIcon,
                    name: 'Lipides',
                    count: keyData.lipidCount,
                    unit: 'g',
                },
            ],
        }
    }
    activity(datas) {
        const { sessions } = datas

        return Array.isArray(sessions)
            ? sessions.map(({ day, kilogram, calories }, index) => {
                  return {
                      day: day,
                      kilogram: kilogram,
                      calories: calories,
                      index: index + 1,
                  }
              })
            : []
    }
    averageSessions(datas) {
        const { sessions } = datas

        const days = {
            1: 'L',
            2: 'M',
            3: 'M',
            4: 'J',
            5: 'V',
            6: 'S',
            7: 'D',
        }
        return Array.isArray(sessions)
            ? sessions.map(({ day, sessionLength }) => {
                  return {
                      day: days[day],
                      sessionLength: sessionLength,
                  }
              })
            : []
    }
    performance(datas) {
        const { data } = datas

        const category = {
            1: 'Cardio',
            2: 'Energie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité',
        }

        return Array.isArray(data)
            ? data
                  .map(({ value, kind }) => {
                      return {
                          value: value,
                          kind: category[kind],
                      }
                  })
                  .reverse()
            : []
    }
}

export default DataModeling
