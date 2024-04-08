import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/Bible_Study_3.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';

const BibleStudy = ({data}) => {
    return (
        <>
            <InnerHeader value="Bible Study Ministry" />
            <section className='detail_sec about_sec'>
                <div className='custom-container'>
                    <div className='custom_row'>
                        <div className='custom_col-6'>
                            <div className='imgCol'>
                                <img src={aboutImg} alt='About Us' />
                            </div>
                        </div>
                        <div className='custom_col-6'>
                            <div className='detail_cont'>
                                <p>"Let's discover profound insights and deepen our faith, together! Join a community of passionate learners as we explore scripture, foster spiritual growth, and cultivate meaningful connections. Whether you're a seasoned scholar or new to the journey, our inclusive and engaging sessions offer valuable perspectives and opportunities for personal reflection. Let's embark on this transformative journey together, as we delve into the Word of God and deepen our connections!"</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BibleStudy;