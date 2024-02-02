import React, { useEffect } from "react";
import InnerHeader from "./components/innerHeader";
import gallery1 from "./assets/images/gallery1.jpeg"
import poor from './assets/images/poor.jpg';
import menMeet from './assets/images/menmeeting.jpg';
import womenMeet from './assets/images/women_meeting.jpg';
import seniorMeet from './assets/images/senior_meetings.jpg';
import childMeet from './assets/images/children_meet.jpg';
import nightShift from './assets/images/nightShift.jpg';
import MinistryDetail from "./pages/MensministryDetail";
import AOS from "aos";
import 'aos/dist/aos.css';
import SundaySchool from "./pages/SundaySchool";

const Gallery = () => {

    useEffect(() => {
        AOS.init({once: true});
    }, [])

    return (
        <>
            <InnerHeader value='Gallery' />

            <section className='gallery_sec'>
                <div className='custom-container'>
                    <div className='gallery_Inner'>
                        <div className='custom_row'>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={gallery1} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={menMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={womenMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={seniorMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={childMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={nightShift} alt='Poor' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery;