import './stylesheet/globalStyles.css'
import './stylesheet/footerStyles.css'

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footerContent">
				<div className="footerLogo">
					Key Vault
				</div>
				<div className="footerColumns">
					<div className="footerColumn">
					<h3>Company</h3>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Our Team</a></li>
						<li><a href="#">Careers</a></li>
					</ul>
					</div>
					<div className="footerColumn">
					<h3>Services</h3>
					<ul>
						<li><a href="#">Password Management</a></li>
						<li><a href="#">Data Security</a></li>
						<li><a href="#">Customer Support</a></li>
					</ul>
					</div>
					<div className="footerColumn">
					<h3>Resources</h3>
					<ul>
						<li><a href="#">Blog</a></li>
						<li><a href="#">FAQs</a></li>
						<li><a href="#">Downloads</a></li>
					</ul>
					</div>
					<div className="footerColumn">
					<h3>Contact Us</h3>
					<ul>
						<li>Email: akumar.btech2023@nitrr.ac.in</li>
						<li>Phone: +91 98715-53822</li>
						<li>Address: <br />Room No 323, Hostel - H (Sirpur), National Institute of Technology, Raipur</li>
					</ul>
					</div>
				</div>
				</div>
				<div className="copyright">
				&copy; 2024 Key Vault. All rights reserved.
				</div>
			</footer>
		</>
	)
}

export default Footer