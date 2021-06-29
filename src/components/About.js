import React from 'react'
import Me from '../me.jpg'

const About = () => {
    return (
        
        <section id="about" className="section-padding about-section">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <div className="section_title"><br/>
                            <div className="section_subtitle">About me</div>
                            <h2 className="section_main_title"><strong>I'm Abdelmageed Hamdi</strong> 
                            </h2>
                            </div>

                            <div className="about-me">
                                <p>
                                self-based learner and Front-end developer with Javascript experience looking for a great opportunity to put my talents to use, Team player with good communication skills who is flexible and ready to work with a passionate team of designers and developers
                                </p>
                                <p>
                                My aim is very simple - to create the most qualitative, productive and moreover, modern web applications, pixel perfect websites, and deliver simple and quick to load websites. My goal with every website I make is to take care of every small detail in it because that's what makes a difference.
                                    </p>
                                    <p>
                                I am currently working in Egypt. I am always available to discuss your project.
                                </p>
                            
                            </div>
                            </div>

                            <div className="col-6 col-md-4 col-sm-offset-2 align-self-center">
                                <div className="about-box">
                                    <div className="about-overlay"></div>
                                    <img src={Me} alt="me" className="me-img"/>
                                    
                                </div>
                            </div>


                        
                    </div>
                </div>

        </section>
    )
}

export default About

