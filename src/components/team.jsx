import './stylesheet/globalStyles.css'
import './stylesheet/teamStyles.css'

function Team() {
    return (
        <>
            <section className='section' id='introSection'>
                <div className='contentSection'>
                    <div className="welcomeText">Our Team</div>
                    <div class="fade_rule"></div> 
                    <div className="welcomeText">Get to Know the Dedicated Team Behind Key Vault: Your Trusted Partners in Crafting a Secure Password Manager! With Their Expertise and Hard Work, They've Developed an Easy-to-Use Solution Ensuring Your Online Accounts Stay Safe and Secure, Making Digital Security a Breeze!</div>
                </div>
            </section>


            <section className='section' id='cardSection'>
                <div className="contentSection">
                    <card className = 'nameCard' id = "amanCard">
                        <div className="profilePhoto"></div>
                        <div className="name">Aman Kumar</div>
                        <div className="preDescription">-Full Stack Developer</div>
                        <div className="details">Student at the National Institute of Technology in Raipur, deeply involved in his Information Technology studies, On track to graduate in 2026. excelling particularly in full-stack development.</div>
                    </card>
                    <card className = 'nameCard' id = "aakashCard">
                        <div className="profilePhoto"></div>
                        <div className="name">Aakash Ranjan</div>
                        <div className="preDescription">-Backend Developer</div>
                        <div className="details">Student at the National Institute of Technology in Raipur, Information Technology studies are a deep passion. Set to graduate in 2026, he has honed his skills in back-end development.</div>
                    </card>
                    <card className = 'nameCard' id = "yashCard">
                        <div className="profilePhoto"></div>
                        <div className="name">Yashwardhan Srivastava</div>
                        <div className="preDescription">-Backend Developer</div>
                        <div className="details">Student at the National Institute of Technology in Raipur, back-end development is a forte he's embraced wholeheartedly. Expected to graduate in 2026,</div>
                    </card>
                </div>
            </section>
        </>
    )
}

export default Team