import React from 'react';
import '../globalStyles.css';
import './homeStyles.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
    const [typeEffect] = useTypewriter({
		words: ['Reliability', 'Security', 'Storage', 'Manager'],
		loop: {},
		typeSpeed: 125,
		deleteSpeed: 40,
	})

	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<main>
				<section className='section'>
					<div class="contentSection">
						<div class="mainDivTwo">
							<div className="sectionOne">
								<h1>We provide <span>{typeEffect}</span></h1>
								<div className="headingDescription">
									<p>Your data belongs to you. Key Vault enables you to store and sync passwords and passkeys wherever is best for you.</p>
								</div>
									<button className="buttons" onClick={() => loginWithRedirect()}>Get Started</button>
							</div>
						</div>
						<div class="illustrationOne"></div>
					</div>
				</section>

				<div class="fade_rule"></div> 

				<section className='section' id = 'smallSection'>
					<div className="contentSectionTwo">
							<div>You were not born to remember passwords</div>
							<div>Set up a main password and let Key Vault handle everything else. From logins and credit cards to IDs and important info, keep it all safe in one spot.</div>
					</div>
				</section>

				<div class="fade_rule"></div> 

				<section className='section sectionThree'>
					<div class="contentSection">
						<div class="illustrationTwo"></div>
						<div class="mainDivTwo">
							<div>Easy Access to Every Password</div>
							<div>Unlock every password with just a tap of your finger. Our intuitive password manager puts all your credentials right at your fingertips, ensuring seamless access to your accounts whenever you need them.</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Home