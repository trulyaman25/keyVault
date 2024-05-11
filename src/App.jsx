import './App.css'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import Team from "./components/team/team"
import Dashboard from './components/dashboard/dashboard'
import Notes from './components/dashboard/dashboardComponents/notes/notes'
import Profile from './components/dashboard/dashboardComponents/profile/profile'
import Settings from './components/dashboard/dashboardComponents/settings/settings'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <Router>
                {window.location.pathname.includes("/") && 
                 window.location.pathname.includes("/team") && 
                 <Header />}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />

                    {isAuthenticated ? (
                        <Route path="/dashboard" element={<Dashboard />} />
                    ) : (
                        <Route path="/" element={<Navigate to="/" replace />} />
                    )}

                    {isAuthenticated ? (
                        <Route path="/notes" element={<Notes />} />
                    ) : (
                        <Route path="/" element={<Navigate to="/" replace />} />
                    )}

                    {isAuthenticated ? (
                        <Route path="/profile" element={<Profile />} />
                    ) : (
                        <Route path="/" element={<Navigate to="/" replace />} />
                    )}
                    
                    {isAuthenticated ? (
                        <Route path="/settings" element={<Settings />} />
                    ) : (
                        <Route path="/" element={<Navigate to="/" replace />} />
                    )}
                </Routes>

                {window.location.pathname.includes("/") && 
                 window.location.pathname.includes("/team") && 
                <Footer />}
            </Router>
            
        </>
    )
}

export default App
