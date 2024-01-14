import React, { useEffect } from "react";
import InnerHeader from "./components/innerHeader";
import poor from './assets/images/poor.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';

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
                                    <img src={poor} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={poor} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={poor} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={poor} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={poor} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={poor} alt='Poor' />
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