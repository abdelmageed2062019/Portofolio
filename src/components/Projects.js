import React,{useEffect} from 'react'
import Movie from '../movie.png'
import Git from '../github.png'
import Covid from '../covid.png'
import Natours from '../Natours.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    return (
        <section id="project" className="project" data-aos="fade-up">
        <div className="container">
            <h2 className="project_title">Projects</h2>
            <div className="row">

            <div className="col-md-3 card text-center">
                <img src={Movie} alt="movie" />
         <div className="card-body text-dark">
             <h4 className="card-title">Movie App<a  href="https://abdelmageed2062019.github.io/Movie/" target="_blank"><FontAwesomeIcon icon={faPaperPlane} style={{color:"#6f42c1"}}/></a></h4>
             <p className="card-text text-secondery">Movie app is application that list of movie and series with rate and discreption Built using HTML ,CSS and Javascript</p>
             <div className="use-wrapper">
                 <span>Html</span>
                 <span>Css</span>
                 <span>Javascript</span>
                 <span>API movie</span>
             </div>
         </div>
            </div>

            <div className="col-md-3 card text-center">
                <img src={Covid} alt="movie" />
         <div className="card-body text-dark">
             <h4 className="card-title">Covid-19<a  href="https://covid-1919-tracker.netlify.app/" target="_blank"><FontAwesomeIcon icon={faPaperPlane} style={{color:"#589bff"}}/></a></h4>
             <p className="card-text text-secondery">Covid App is application track covid-19 virus around the world give us the number of Infected, Recovered and Deaths</p>
             <div className="use-wrapper">
                 <span>Reactjs</span>
                 <span>Css</span>
                 <span>API Covid</span>
             </div>
         </div>
            </div>

            <div className="col-md-3 card text-center">
                <img src={Git} alt="movie" />
         <div className="card-body text-dark">
             <h4 className="card-title">Github-profiles<a  href="https://githubuser206.netlify.app/" target="_blank"><FontAwesomeIcon icon={faPaperPlane} style={{color:"#aaa"}}/></a></h4>
             <p className="card-text text-secondery">Github-profiles is web application for profiles in github give some information about checked profile like followers and reposities</p>
             <div className="use-wrapper">
                 <span>Html</span>
                 <span>Css</span>
                 <span>Javascript</span>
             </div>
         </div>
         </div>

         <div className="col-md-3 card text-center">
                <img src={Natours} alt="movie" />
         <div className="card-body text-dark">
             <h4 className="card-title">Natours<a  href="https://abdelmageed2062019.github.io/Movie/" target="_blank"><FontAwesomeIcon icon={faPaperPlane} style={{color:"#28a745"}}/></a></h4>
             <p className="card-text text-secondery">Landing page built  with Html and Sass</p>
             <div className="use-wrapper">
                 <span>Html</span>
                 <span>Sass</span>
                 
             </div>
         </div>
         </div>



            </div>
        </div>
        </section>
    )
}

export default Projects
