import { useState } from 'react'
import './App.css'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import Signup from "./components/signup/signup"
import Signin from "./components/signin/signin"
import Team from "./components/team/team"
import Dashboard from "./components/dashboard/dashboard"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
	return (
		<>
			<Header></Header>
			<BrowserRouter basename="/">
				<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/team" element={<Team/>}/>
						<Route path="/signup" element={<Signup/>}/>
						<Route path="/signin" element={<Signin/>}/>
						<Route path="/dashboard" element={<Dashboard/>}/>
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</>
	)
}

export default App