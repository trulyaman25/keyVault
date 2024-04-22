import '../globalStyles.css'
import './headerStyles.css'

function Header() {
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
						<a href = "/team"><button className="buttons">Our Team</button></a>
						<a href = "/signup"><button className="buttons">Sign Up</button></a>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header