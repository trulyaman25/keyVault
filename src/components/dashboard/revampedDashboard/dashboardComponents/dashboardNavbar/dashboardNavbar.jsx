import '../../revampedDashboardStyles.css'
import './dashboardNavbarStyles.css'
import { useAuth0 } from "@auth0/auth0-react";
import ProfileIcon from '../../../../assets/icons/d_profileIcon.svg'
import LoginIcon from '../../../../assets/icons/d_lockIcon.svg'
import NotesIcon from '../../../../assets/icons/d_docsIcon.svg'
import GearIcon from '../../../../assets/icons/d_gearIcon.svg'
import ExitIcon from '../../../../assets/icons/d_exitIcon.svg'

function DashboardNavbar() {
    const { logout } = useAuth0();

    return (
        <>
            <nav className='d_navbarHolder'>
                <div id='d_logo' className='d_navbarLogo'>
                    KEY VAULT
                </div>

                <ul className='d_navbarList'>
                    <a href="/revampedDashboard" className="d_navButtons">
                        <img src={LoginIcon} alt="Login Icon" id='d_loginIcon'/>
                        <li className='d_navButtonLabel'>Logins</li>
                    </a>
                    <a href="/notes" className="d_navButtons">
                        <img src={NotesIcon} alt="Login Icon" id='d_loginIcon'/>
                        <li className='d_navButtonLabel'>Secure Notes</li>
                    </a>
                    <a href="/profile" className="d_navButtons">
                        <img src={ProfileIcon} alt="Login Icon" id='d_loginIcon'/>
                        <li className='d_navButtonLabel'>Profile</li>
                    </a>

                    <a href="/settings" className="d_navButtons">
                        <img src={GearIcon} alt="Settings Icon" id='d_settingsIcon'/>
                        <li className='d_navButtonLabel'>Settings</li>
                    </a>
                </ul>

                <a href="/" className="d_navButtons" onClick={ () => logout({ returnTo: window.location.origin }) }>
                    <img src={ExitIcon} alt="Exit Icon" id='d_settingsIcon'/>
                    <li className='d_navButtonLabel'>Exit Dashboard</li>
                </a>
            </nav>
        </>
    )
}

export default DashboardNavbar;