import React from 'react';
import Slider from 'react-slick';
import donation from './assets/images/donation.jpg';
import child from './assets/images/poorchild.jpg';
import children from './assets/images/children.jpg';
import eventImg from './assets/images/eventimg.jpg';

var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
};

const Home = () => {
    return(
        <>
        <section className='hero_slider_sec'>
            <div className='slider_inner'>
                <Slider {...settings}>
                    <div>
                        <div className='slideItem' style={{backgroundImage: `url(${child})`}}>
                            <div className='slidebgOverlay'></div>
                            <div className='custom-container'>
                                <div className='slider_cont'>
                                    <h3>Help Us with Donate</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='slideItem' style={{backgroundImage: `url(${children})`}}>
                            <div className='slidebgOverlay'></div>
                            <div className='custom-container'>
                                <div className='slider_cont'>
                                    <h3>Caring is Sharing</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='slideItem' style={{backgroundImage: `url(${donation})`}}>
                            <div className='slidebgOverlay'></div>
                            <div className='custom-container'>
                                <div className='slider_cont'>
                                    <h3>Give a Bit. Change a Lot</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>

        <section className='volunteer_sec'>
            <div className='custom-container'>
                <div className='sec_ttl'>
                    <h2><span>Our</span> Volunteers</h2>
                    <span className='fancy_ttl'>
                        <i className='fa fa-child-reaching'></i>
                    </span>
                </div>
                <div className='custom_row'>
                    <div className='custom_col-3'>
                        <div className='voluntCard'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <h4>Jennifer Doe</h4>
                            <span>Head Volunteer</span>
                            <ul className='social'>
                                <li>
                                    <a href='#' title='Twitter'><i className='fa fa-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='Facebook'><i className='fa fa-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='LinkedIn'><i className='fa fa-linkedin'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='custom_col-3'>
                        <div className='voluntCard'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <h4>Jennifer Doe</h4>
                            <span>Head Volunteer</span>
                            <ul className='social'>
                                <li>
                                    <a href='#' title='Twitter'><i className='fa fa-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='Facebook'><i className='fa fa-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='LinkedIn'><i className='fa fa-linkedin'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='custom_col-3'>
                        <div className='voluntCard'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <h4>Jennifer Doe</h4>
                            <span>Head Volunteer</span>
                            <ul className='social'>
                                <li>
                                    <a href='#' title='Twitter'><i className='fa fa-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='Facebook'><i className='fa fa-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='LinkedIn'><i className='fa fa-linkedin'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='custom_col-3'>
                        <div className='voluntCard'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <h4>Jennifer Doe</h4>
                            <span>Head Volunteer</span>
                            <ul className='social'>
                                <li>
                                    <a href='#' title='Twitter'><i className='fa fa-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='Facebook'><i className='fa fa-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='#' title='LinkedIn'><i className='fa fa-linkedin'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='counter_sec'>
            <div className='custom-container'>
                <div className='counter_inner'>
                    <div className='custom_row'>
                        <div className='custom_col-3'>
                            <div className='counterWrap'>
                                <i className='fa fa-hand-holding-heart'></i>
                                <h5>Counter Text Here</h5>
                                <div className='counterPercentage'>999%</div>
                            </div>
                        </div>
                        <div className='custom_col-3'>
                            <div className='counterWrap'>
                                <i className='fa fa-hands-holding-circle'></i>
                                <h5>Counter Text Here</h5>
                                <div className='counterPercentage'>999%</div>
                            </div>
                        </div>
                        <div className='custom_col-3'>
                            <div className='counterWrap'>
                                <i className='fa fa-hands-holding-child'></i>
                                <h5>Counter Text Here</h5>
                                <div className='counterPercentage'>999%</div>
                            </div>
                        </div>
                        <div className='custom_col-3'>
                            <div className='counterWrap'>
                                <i className='fa fa-hand-holding-dollar'></i>
                                <h5>Counter Text Here</h5>
                                <div className='counterPercentage'>999%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='upcoming_sec'>
            <div className='custom-container'>
                <div class="sec_ttl">
                    <h2><span>Upcoming</span> Events</h2>
                    <span class="fancy_ttl"><i class="fa fa-child-reaching"></i></span>
                </div>
                <div className='custom_row'>
                    <div className='custom_col-6'>
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
                    <div className='custom_col-6'>
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
                    <div className='custom_col-6'>
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
                    <div className='custom_col-6'>
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
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;