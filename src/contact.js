import React from "react";
import InnerHeader from "./components/innerHeader";
import { Form } from "rsuite";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Contact = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <InnerHeader value='Contact' />

            <section className='contact_sec'>

                <div className='contact_inner'>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            fullScreen: {enable: false},
                            background: {
                                color: {
                                    value: "#fff",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#2af598",
                                },
                                links: {
                                    color: "#1bd7bb",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.4,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                    <div className='custom-container'>
                        <div className='contForm'>
                        <Form>
                            <div className='formGrp'>
                                <label for='name'>Name</label>
                                <input type='text' placeholder='Enter Your Name' id='name' />
                            </div>
                            <div className='formGrp'>
                                <label for='email'>Email</label>
                                <input type='email' placeholder='Enter Your Email' id='email' />
                            </div>
                            <div className='formGrp'>
                                <label for='subject'>Subject</label>
                                <input type='text' placeholder='Type The Subject' id='subject' />
                            </div>
                            <div className='formGrp'>
                                <label for='msg'>Message</label>
                                <textarea placeholder='Type Your Message Here...' id='msg'></textarea>
                            </div>
                            <div className='formSubmit'>
                                <input type='submit' value='Submit' className='fullButn butn butn_main' />
                            </div>
                        </Form>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Contact;