import React, { useEffect } from 'react'
import './home.scss'
import Typed from 'typed.js';
import Project from './Project';
import About from './About';
import Footer from './Footer';
import "aos/dist/aos.css";
import AOS from 'aos';
const Home = () =>
{
    useEffect(() =>
    {
        var typed = new Typed('.typing', {
            strings: ['Frontend Developer', 'Freelancer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,

        });
    })
    useEffect(() =>
    {
        AOS.init({
            disable: 'mobile',
            duration: 2000,
            once: false,
            mirror: true,
            disable: function ()
            {
                var maxWidth = 599;
                return window.innerWidth < maxWidth;
            }
        });
    }, []);
    return (
        <div id="home" >
            <div className="main" >
                <div data-aos="flip-left"
                    data-aos-delay="150"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-duration="3000">
                    <div className="image-container">
                        <img className="prof-image" src="./images/me.jpg" width="250px" height="300px" alt="me" />
                    </div>
                </div>
                <div data-aos="zoom-out-down"
                    data-aos-delay="150"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-duration="3000" >
                    <div className="text-container">
                        <div className="title"> Hi, I'm <span>Harini Natarajan</span></div>
                        <div className="text-1">
                            <span className="typing"></span>
                        </div>
                        <div className="text-2">
                            Based in Lund, Sweden.
                            </div>
                    </div>
                </div>
                <div className="button-container">
                    <div data-aos="slide-right"
                        data-aos-delay="150"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-duration="3000" >
                        <a className="button" href="mailto:hello2harinihari@gmail.com">
                            <div className="icon">
                                <p>Hire Me!</p>
                            </div>
                            <span>Send a &nbsp;
                                <img className="gmail-btn" src="/images/gmail.png" alt="gmail" />
                            </span>
                        </a>
                    </div>
                </div>


            </div>

            <Project />
            <About />
            <Footer />
        </div>
    )
}

export default Home
