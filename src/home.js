import React from 'react';
import Slider from 'react-slick';
import slideImg from './assets/images/man-people-old.jpg';

var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000
};

const Home = () => {
    return(
        <>
            <section className='hero_slider_sec'>
                <div className='slider_inner'>
                    <Slider {...settings}>
                        <div>
                            <div className='slideItem' style={{backgroundImage: `url(${slideImg})`}}>
                                <div className='slidebgOverlay'></div>
                                <div className='custom-container'>
                                    <div className='slider_cont'>
                                        <h3>Caring is Sharing</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='slideItem' style={{backgroundImage: `url(${slideImg})`}}>
                                <div className='slidebgOverlay'></div>
                                <div className='custom-container'>
                                    <h3>Help Us with Donate</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='slideItem' style={{backgroundImage: `url(${slideImg})`}}>
                                <div className='slidebgOverlay'></div>
                                <div className='custom-container'>
                                    <h3>Give a Bit. Change a Lot</h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Home;