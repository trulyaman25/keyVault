import './App.css'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import Team from "./components/team/team"
import RevampedDashboard from "./components/dashboard/revampedDashboard/revampedDashboard"
import DashboardNavbar from './components/dashboard/revampedDashboard/dashboardComponents/dashboardNavbar/dashboardNavbar'
import Login from './components/dashboard/revampedDashboard/dashboardComponents/logins/login'
import Notes from "./components/dashboard/revampedDashboard/dashboardComponents/notes/notes"
import Profile from "./components/dashboard/revampedDashboard/dashboardComponents/profile/profile"
import Settings from "./components/dashboard/revampedDashboard/dashboardComponents/settings/settings"
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

                {!window.location.pathname.includes("/") && 
                 !window.location.pathname.includes("/team") && 
                 <DashboardNavbar />}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    {isAuthenticated ? (
                        <Route path="/revampedDashboard" element={<RevampedDashboard />} />
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
