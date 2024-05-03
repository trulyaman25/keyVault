import { useState } from 'react'
import './App.css'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import Team from "./components/team/team"
import Dashboard from "./components/dashboard/dashboard"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <Header></Header>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/team" element={<Team/>}/>
                    {
						isAuthenticated ? (
                        	<Route path="/dashboard" element={<Dashboard/>}/>
                    	) : (
                        	<Route to="/" replace/>
                    	)
					}
                </Routes>
            </Router>
            <Footer></Footer>
        </>
    )
}

export default App
