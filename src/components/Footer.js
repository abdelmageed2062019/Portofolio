import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="footer">
            <p>All Rights Reserved &copy; Abedelmageed Hamdi 2021</p>
            <span className="footer-logo"><FontAwesomeIcon icon={faCode} style={{color:"#000"}}/></span>
            <ul className="social-links">
                <li className="social-links"><SocialIcon url="https://www.facebook.com/mido.hamdi.182/" target="_blank"/></li>
                <li className="social-links"><SocialIcon url="https://www.linkedin.com/in/abdelmageed-hamdy/" /></li>
                <li className="social-links"><SocialIcon url="https://twitter.com/bullshitter_m" target="_blank"/></li>
                <li className="social-links"><SocialIcon url="https://github.com/abdelmageed2062019" target="_blank"/></li>
                <li className="social-links"><SocialIcon url="https://instagram.com/abdlmaged_hamdy" target="_blank"/></li>
            </ul>
        </footer>
    )
}

export default Footer
