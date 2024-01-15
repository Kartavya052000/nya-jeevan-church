import React, { useEffect } from "react";
import InnerHeader from "./components/innerHeader";
import aboutImg from './assets/images/church-about.jpeg';
import AOS from "aos";
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({once: true});
    }, [])
    
    return (
        <>
            <InnerHeader value='About' />

            <section className='about_sec' data-aos='fade-up' data-aos-duration='1200'>
                <div className='custom-container'>
                    <div className='custom_row'>
                        <div className='custom_col-6'>
                            <div className='imgCol'>
                                <img src={aboutImg} alt='About Us' />
                            </div>
                        </div>
                        <div className='custom_col-6'>
                            <div className='about_cont'>
                                <p>Welcome to Naya Jeevan Church! This is where a vibrant church community, faith, fellowship,
                                    and purpose converge! Since 1995, Naya Jeevan Church has been committed to creating a
                                    welcoming space for all, fostering spiritual growth and embracing diversity. We would love for
                                    you to join us in worship, connect with like-minded individuals, and be part of a community
                                    dedicated to living out the teachings of love, compassion, and service. Together, we journey
                                    towards a deeper understanding of our faith and make a meaningful impact in our community
                                    and the world around us!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;