import './profileStyles.css'
import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import DashboardNavbar from "../dashboardNavbar/dashboardNavbar"

function Profile() {

    const { user, logout } = useAuth0();

    return (
        <>
            <div className='md_navBar'>
                <DashboardNavbar />
            </div>

            <div className='pp_primaryScreen'>
                <div className="container">
                    <div clasNames="app">
                        <div className="app-content">
                                <img src={user.picture} alt="" className='app-photo'/>
                                <div className="app-title">
                                    <div className='pp_cursorEvent'>{user.given_name} {user.family_name}</div>
                                    <div className='pp_cursorEvent'>{user.email}</div>
                                    <div className='pp_cursorEvent'>@{user.nickname}</div>
                                </div>

                            <button className='pp_logoutButton' onClick={ () => logout({ returnTo: window.location.origin }) }>Log Out</button>
                            
                            <div className="app-bottom">
                                <div className="app__block">
                                    <h3 className='pp_cursorEvent'>{user.sub}</h3>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
};

export default Profile;
