import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/women_meeting.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';

const WomensDetails = ({data}) => {
    return (
        <>
            <InnerHeader value="Women's Ministry" />
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
                                <p>Nurture and celebrate the strength and grace of one another in our vibrant Women's Ministry! Connect with like-minded individuals, engage in uplifting conversations, and embark on a journey of spiritual growth and empowerment together. Join us as we cultivate a community that embraces sisterhood, wisdom, and faith.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WomensDetails;