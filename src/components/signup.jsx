import {React, useState} from 'react';
import axios from "axios";
import './stylesheet/globalStyles.css';
import './stylesheet/signupStyles.css';

function Signup() {

    const [fullname,setFullname]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')

    async function submit(e){
        console.log("calling");
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/signup",{fullname,username,email,password})
            .then(res=>{
                if(res.data=="exist"){
                    alert("SUCCESFUL")
                }
                else if(res.data=="notexist"){
                    alert("USER CREATED SUCCESFULLY")
                }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    }
    catch(e){
        console.log(e);

    }
    }
  return (
    <>
		<section className='section' id='signupSection'>
			<div className="contentSection">
				<div className="illustration"></div>

				<div className="inputDiv" >
                    <div className="signUpCard">
                        <h1>SIGN UP</h1>
                        <form className="signUpForm">
                            <p>
                                <label htmlFor="fullname" >fullname:</label>
                                <input type="text" placeholder="fullname" id="name" onChange={(e) => { setFullname(e.target.value) }}/>
                            </p>
                            <p>
                                <label htmlFor="username" >username:</label>
                                <input type="text" placeholder="username" id="username" onChange={(e) => { setUsername(e.target.value) }}/>
                            </p>
                            <p>
                                <label htmlFor="email" >email:</label>
                                <input type="text" placeholder="youremail@gmail.com" id="email" onChange={(e) => { setEmail(e.target.value) }}/>
                            </p>
                            <p>
                                <label htmlFor="password" >password:</label>
                                <input type="password" placeholder="password" id="password" onChange={(e) => { setPassword(e.target.value) }}/>
                            </p>
                            <p>
                                <button className='submitButton' id="submit" onClick={submit}>Create Account</button>
                            </p>
                        </form>
                            
                        <p id="login">Already have an account? <a  href="/signin">Login</a></p>
                        
                    </div>
                </div>
			</div>
		</section>
    </>
  );
}

export default Signup