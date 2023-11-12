import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './layout/Header'
import { GlobalStyle } from './styles/GlobalStyle/globalStyle'
import Sidebar from './layout/Sidebar'
import User from './pages/User'
import Error from './pages/Error'
import { ContextProvider } from '../src/utils/context'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Router>
            <ContextProvider>
                <GlobalStyle />
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="user/:id" element={<User />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ContextProvider>
        </Router>
    </React.StrictMode>
)
