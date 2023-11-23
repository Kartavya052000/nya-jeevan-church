import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/child_bw.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';

const MinistryDetail = ({data}) => {
    return (
        <>
            <InnerHeader value='Ministry Detail' />
            <section className='detail_sec about_sec'>
                <div className='custom-container'>
                    <div className='custom_row'>
                        <div className='custom_col-6'>
                            <div className='detail_cont'>
                                <p>At Nav Jeevan Church, we are dedicated to creating positive change and fostering a brighter 
                                    future for communities in need. Established with a commitment to service and compassion, 
                                    our non-profit organization focuses on a range of impactful initiatives aimed at addressing 
                                    societal challenges.<br/>
                                    Join us on our mission to make a positive impact. 
                                    Nav Jeevan Church welcomes volunteers, donors, and 
                                    partners who share our vision of a more equitable 
                                    and compassionate world. Together, we can build a brighter future for all.
                                </p>
                            </div>
                        </div>
                        <div className='custom_col-6'>
                            <div className='imgCol'>
                                <img src={aboutImg} alt='About Us' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MinistryDetail;