import { useState } from 'react'
import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"
import Signup from "./components/signup"
import Signin from "./components/signin"
import Team from "./components/team"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<>
			<Header></Header>
			<Router>
				<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/team" element={<Team/>}/>
						<Route path="/signup" element={<Signup/>}/>
						<Route path="/signin" element={<Signin/>}/>
				</Routes>
			</Router>
			<Footer></Footer>
		</>
	)
}

export default App