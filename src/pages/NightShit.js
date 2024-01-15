import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/nightShift.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';

const Nightshift = ({data}) => {
    return (
        <>
            <InnerHeader value="Night Shift Ministry" />
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
                                <p>With Naya Jeevan’s Night Shift Ministry, you can volunteer to make a difference in the lives of the less fortunate. You can join us in providing essential resources, empathy, and support for those in need. Your time can help create positive change and bring hope to those facing housing and nourishment challenges. Together, let's build a community that cares!.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nightshift;