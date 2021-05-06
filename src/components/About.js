
import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import './about.scss'
import "aos/dist/aos.css";
import AOS from 'aos';
const About = () =>
{
    useEffect(() =>
    {
        AOS.init({
            disable: 'mobile',
            duration: 2000,
            once: false,
            mirror: true,

        });
    }, []);
    return (
        <div id="about">
            <div className="main-about" >
                <div className="sectionTitle">
                    <div data-aos="slide-left" data-aos-delay="100" data-aos-anchor-placement="top-center"
                        data-aos-delay="150"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-duration="3000">
                        <h1>About Me </h1>
                    </div>
                </div>

                <div className="wrapper">
                    <a className="button" href="/portfolio/Resume2021.pdf" download="HariniNatarajan_Resume.pdf">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center"
                            data-aos-delay="150"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-duration="3000">
                            <div className="icon">
                                <img src="/portfolio/images/download.png" alt="download"></img>
                            </div>

                            <span>Resume</span>
                        </div>
                    </a>
                    <a className="button" href="https://github.com/Hariniharidass" target='_blank' rel="noopener noreferrer">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center"
                            data-aos-delay="150"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-duration="3000" >
                            <div className="icon">
                                <img src="/portfolio/images/github.png" alt="github" />
                            </div>


                            <span>Github</span>
                        </div>
                    </a>
                    <a className="button" href="https://www.youtube.com/channel/UCHjVuo0D4zS8lQ0sZMddA9g" target='_blank' rel="noopener noreferrer">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center"
                            data-aos-delay="150"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-duration="3000" >
                            <div className="icon">
                                <img src="/portfolio/images/youtube.png" alt="youtube" />
                            </div>

                            <span>YouTube</span>
                        </div>
                    </a>
                    <a className="button" href="mailto:hello2harinihari@gmail.com" target='_blank' rel="noopener noreferrer">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center"
                            data-aos-delay="150"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-duration="3000">
                            <div className="icon">

                                <img src="/portfolio/images/gmail.png" alt="gmail" />
                            </div>

                            <span>Gmail</span>
                        </div>
                    </a>
                    <a className="button" href="https://www.linkedin.com/in/harini-natarajan-854b9510a/" target='_blank' rel="noopener noreferrer">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center"
                            data-aos-delay="150"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-duration="3000">
                            <div className="icon">

                                <img src="/portfolio/images/linkedin.png" alt="linkedin" />
                            </div>

                            <span>LinkedIn</span>
                        </div>
                    </a>
                </div>


                <div className="about-container">

                    <div className="education">
                        <Card>
                            <Card.Body>
                                <div data-aos="slide-left" data-aos-anchor-placement="top-center"
                                    data-aos-delay="150"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    data-aos-duration="3000">
                                    <Card.Text>
                                        I hold MS Degree in Computer Science (Malmo University, Sweden).
                                <a href="https://muep.mau.se/bitstream/handle/2043/23169/master-thesis_Rashmi_Natarajan_D2.pdf?sequence=2&isAllowed=y"> Master Thesis </a>  @ Axis Communications, Lund Sweden.
                                Worked @ DASC as Frontend Developer  (2018 March-September)
                            </Card.Text>
                                </div>
                                <ul className="unorder-lists">
                                    <div data-aos="slide-right"
                                        data-aos-delay="150"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        data-aos-duration="3000">
                                        <div className="list">

                                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                            </svg> <li className="list-text">  Responsive web pages</li>
                                        </div>
                                    </div>
                                    <div data-aos="slide-right"
                                        data-aos-delay="150"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        data-aos-duration="3000">
                                        <div className="list">

                                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                            </svg> <li className="list-text">REST API</li>
                                        </div>
                                    </div>
                                    <div data-aos="slide-right"
                                        data-aos-delay="150"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        data-aos-duration="3000">
                                        <div className="list">

                                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                            </svg><li className="list-text">Javascript ES6</li>
                                        </div>
                                    </div>
                                </ul>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="skills">
                        <h2 className="skill-head">Technical Skills</h2>
                        <div data-aos="flip-down" data-aos-delay="300" data-aos-anchor-placement="top-center"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-duration="3000">

                            <div className="skillset">
                                <img className="img-center" src="/portfolio/icons/vscode.png" alt="vscode" />
                                <div className="item" style={{ animationDelay: "-1.5s" }}>
                                    <img className="img-icon" src="/portfolio/icons/html.png" alt="html" />
                                </div>
                                <div className="item" style={{ animationDelay: "-3s" }}>
                                    <img className="img-icon" src="/portfolio/icons/css3.png" alt="css3" />
                                </div>
                                <div className="item" style={{ animationDelay: "-4.5s" }}>
                                    <img className="img-icon" src="/portfolio/icons/js.png" alt="js" />
                                </div>
                                <div className="item" style={{ animationDelay: "-6s" }}>
                                    <img className="img-icon" src="/portfolio/icons/jquery.png" alt="jquery" />
                                </div>
                                <div className="item" style={{ animationDelay: "-7.5s" }}>
                                    <img className="img-icon" src="/portfolio/icons/mongodb.png" alt="mongodb" />
                                </div>
                                <div className="item" style={{ animationDelay: "-9s" }}>
                                    <img className="img-icon" src="/portfolio/icons/mysql.png" alt="mysql" />
                                </div>
                                <div className="item" style={{ animationDelay: "-10.5s" }}>
                                    <img className="img-icon" src="/portfolio/icons/nodejs.png" alt="nodejs" />
                                </div>
                                <div className="item" style={{ animationDelay: "-12s" }}>
                                    <img className="img-icon" src="/portfolio/icons/php.png" alt="php" />
                                </div>
                                <div className="item" style={{ animationDelay: "-13.5s" }}>
                                    <img className="img-icon" src="/portfolio/icons/react.png" alt="react" />
                                </div>
                                <div className="item" style={{ animationDelay: "-15s" }}>
                                    <img className="img-icon" src="/portfolio/icons/bootstrap.png" alt="bootstrap" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div >


            </div >
        </div>

    )
}

export default About
