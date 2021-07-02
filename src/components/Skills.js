import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    return (
        <section id="skills" className="bg">
        <div className="container" data-aos="fade-up">
            <h2 className="skills_title">What i use</h2>
            <div className="skills">
                <ul>
                    <li>html5</li>
                    <li>css</li>
                    <li>Javascript</li>
                    <li>sass</li>
                    <li>npm</li>
                    <li>firebase</li>
                    <li>vuejs</li>
                    <li>bootstrap</li>
                    <li>git</li>
                    <li>webpack</li>
                </ul>
            </div>
        </div>
        </section>
    )
}

export default Skills
