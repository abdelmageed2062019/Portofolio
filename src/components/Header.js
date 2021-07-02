import React, {useEffect} from 'react'
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
        
    return (
        <div className="header-wraper">
            <div className="main-info" data-aos="fade-up">
                <h1>Frontend development</h1>
                <Typed
                    className="typed-text"
                    strings={["I'm Abdelmageed Hamdi","I'm Frontend Development" ]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <a href="#contact" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
