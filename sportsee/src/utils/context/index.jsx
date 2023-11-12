import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const DataContext = createContext()

export const ContextProvider = ({ children }) => {
    const [isMockedData, setMockedData] = useState(false)
    console.log(isMockedData)
    const toggleMockedData = () => {
        setMockedData(!isMockedData)
    }

    return (
        <DataContext.Provider value={{ isMockedData, toggleMockedData }}>
            {children}
        </DataContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
}
