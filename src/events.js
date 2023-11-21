import React, { useEffect } from "react";
import InnerHeader from "./components/innerHeader";
import AOS from "aos";
import 'aos/dist/aos.css';
import eventImg from './assets/images/child_bw.jpg';

const Events = () => {

    useEffect(() => {
        AOS.init({once: true});
    }, [])

    return (
        <>
            <InnerHeader value='Events' />

            <section className='events_sec'>
                <div className='custom-container'>
                    <div className='events_Inner'>
                        <div className='custom_row'>
                            <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='eventCard'>
                                    <div className='card_img'>
                                        <img src={eventImg} alt='Event' />
                                    </div>
                                    <div className='card_body'>
                                        <h3>Events 1</h3>
                                        <div className='eventFlex'>
                                            <span><i className='fa fa-calendar'></i> January 7, 2019</span>
                                            <span><i className='fa fa-clock'></i> 8:47 am</span>
                                            <span><i className='fa fa-map-marker-alt'></i> Glasgow</span>
                                        </div>
                                        <div className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <a href='#' className='butn butn_main butn_sm butn_rounded'>Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='eventCard'>
                                    <div className='card_img'>
                                        <img src={eventImg} alt='Event' />
                                    </div>
                                    <div className='card_body'>
                                        <h3>Events 2</h3>
                                        <div className='eventFlex'>
                                            <span><i className='fa fa-calendar'></i> January 7, 2019</span>
                                            <span><i className='fa fa-clock'></i> 8:47 am</span>
                                            <span><i className='fa fa-map-marker-alt'></i> Glasgow</span>
                                        </div>
                                        <div className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <a href='#' className='butn butn_main butn_sm butn_rounded'>Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='eventCard'>
                                    <div className='card_img'>
                                        <img src={eventImg} alt='Event' />
                                    </div>
                                    <div className='card_body'>
                                        <h3>Events 3</h3>
                                        <div className='eventFlex'>
                                            <span><i className='fa fa-calendar'></i> January 7, 2019</span>
                                            <span><i className='fa fa-clock'></i> 8:47 am</span>
                                            <span><i className='fa fa-map-marker-alt'></i> Glasgow</span>
                                        </div>
                                        <div className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <a href='#' className='butn butn_main butn_sm butn_rounded'>Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='eventCard'>
                                    <div className='card_img'>
                                        <img src={eventImg} alt='Event' />
                                    </div>
                                    <div className='card_body'>
                                        <h3>Events 4</h3>
                                        <div className='eventFlex'>
                                            <span><i className='fa fa-calendar'></i> January 7, 2019</span>
                                            <span><i className='fa fa-clock'></i> 8:47 am</span>
                                            <span><i className='fa fa-map-marker-alt'></i> Glasgow</span>
                                        </div>
                                        <div className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <a href='#' className='butn butn_main butn_sm butn_rounded'>Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='eventCard'>
                                    <div className='card_img'>
                                        <img src={eventImg} alt='Event' />
                                    </div>
                                    <div className='card_body'>
                                        <h3>Events 5</h3>
                                        <div className='eventFlex'>
                                            <span><i className='fa fa-calendar'></i> January 7, 2019</span>
                                            <span><i className='fa fa-clock'></i> 8:47 am</span>
                                            <span><i className='fa fa-map-marker-alt'></i> Glasgow</span>
                                        </div>
                                        <div className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <a href='#' className='butn butn_main butn_sm butn_rounded'>Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='eventCard'>
                                    <div className='card_img'>
                                        <img src={eventImg} alt='Event' />
                                    </div>
                                    <div className='card_body'>
                                        <h3>Events 6</h3>
                                        <div className='eventFlex'>
                                            <span><i className='fa fa-calendar'></i> January 7, 2019</span>
                                            <span><i className='fa fa-clock'></i> 8:47 am</span>
                                            <span><i className='fa fa-map-marker-alt'></i> Glasgow</span>
                                        </div>
                                        <div className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <a href='#' className='butn butn_main butn_sm butn_rounded'>Enroll Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events;