import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../globalStyles.css';
import './signinStyles.css';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/", { username, password });
            if (response.data === "exist") {
                navigate("/dashboard"); 
            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    return (
        <>
            <section className='section' id='signupSection'>
                <div className="contentSection">
                    <div className="illustration"></div>
                    <div className="inputDiv">
                        <div className="signInCard">
                            <h1>SIGN IN</h1>
                            <form className="signInForm">
                                <p>
                                    <label htmlFor="username">username:</label>
                                    <input type="text" placeholder="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                                </p>
                                <p>
                                    <label htmlFor="password">password:</label>
                                    <input type="password" placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                </p>
                                <p>
                                    <button className='submitButton' id="submit" onClick={submit}>Login In</button>
                                </p>
                            </form>
                            <p id="login">Don't have an account? <a href="/signup">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signin;
