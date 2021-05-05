import React, { Component } from 'react'
import Particles from "react-particles-js";
export class ParticlesComponent extends Component
{
    render()
    {
        return (

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <Particles
                    params={{
                        zIndex: -100,
                        fpsLimit: 60,
                        particles: {
                            number: {
                                value: 0,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#ff0000",
                                animation: {
                                    enable: true,
                                    speed: 180,
                                    sync: true
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 3,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 15,
                                random: {
                                    enable: false,
                                    minimumValue: 1
                                },
                                animation: {
                                    enable: true,
                                    speed: 10,
                                    minimumValue: 1,
                                    sync: true,
                                    startValue: "min",
                                    destroy: "max"
                                }
                            },
                            links: {
                                enable: false
                            },
                            move: {
                                enable: true,
                                speed: 10,
                                direction: "right",
                                distance: 10,
                                random: false,
                                straight: true,
                                outMode: "split",
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "trail"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 200,
                                    size: 10,
                                    duration: 1,
                                    opacity: 0.8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 200
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 4
                                },
                                trail: {
                                    delay: 0.05,
                                    quantity: 1
                                }
                            }
                        },
                        retina_detect: true,

                        "pauseOnBlur": true,
                        "pauseOnOutsideViewport": true,
                        "responsive": [],
                        "themes": []
                    }}
                />

            </div>
        )
    }
}

export default ParticlesComponent
