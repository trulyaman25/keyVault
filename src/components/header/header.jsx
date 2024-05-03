import '../globalStyles.css';
import './headerStyles.css';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {

	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

	return (
		<>
			<header>
				<div className="navBar">
                    <a href = "/">
                        <div className="logo">
                            Key Vault
                        </div>
                    </a>
					
					<div className="buttonSection">
						<a href = "/"><button className="buttons">Home</button></a>
						{
							isAuthenticated ? (
								<a href = "/dashboard">
									<button className="buttons">Dashboard</button>
								</a>
							) : (
								<a href = "/team">
									<button className="buttons">Our Team</button>
								</a>
							)
						}
						
						{
							isAuthenticated ? (
								<button className="buttons" onClick={ () => logout({ returnTo: window.location.origin }) }>Log Out</button>
							) : (
								<button className="buttons" onClick={ () => loginWithRedirect() }>Sign In</button>
							)
						}
						
					</div>
				</div>
			</header>
		</>
	)
}

export default Header