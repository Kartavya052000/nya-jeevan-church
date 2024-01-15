import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/sundayschool.jpeg';
import AOS from "aos";
import 'aos/dist/aos.css';

const SundaySchool = ({data}) => {
    return (
        <>
            <InnerHeader value="Sunday School Ministry" />
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
                                <p>Ignite the curiosity and nurture the faith of our youngest members in Sunday School! Through engaging lessons, interactive activities, and a spirit of joy, we guide children on a journey of discovery, building a strong foundation for their spiritual growth. Join us as we make learning about God's love a memorable and joyful experience for our Sunday School kids.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SundaySchool;