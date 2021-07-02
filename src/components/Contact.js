import React, {useState,useEffect} from 'react'
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Result =() => {
    return (
        <p>Your message has been sent successfully , i will contact you soon.</p>
    )
}

function Contact(props)  {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    const [result, showResult] = useState(false)

    const  sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('gmail', 'portofolio-171717', e.target, 'user_0eBJNWgMbfgKxNQsre6YI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        showResult(true)
    }

    setTimeout(() => {
        showResult(false)
    }, 4000);


    return (
        <section id="contact" data-aos="fade-up">
            <div className="container">
                <div className="contact-title">Get in touch</div>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5">
                        <div className="col-8 form-group ">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="col-8 form-group pt-2 ">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="col-8 form-group pt-2 ">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 ">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>

                    <div className="row res">
                        { result ? <Result /> : null }
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
