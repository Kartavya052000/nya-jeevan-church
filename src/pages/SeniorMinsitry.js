import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/senior_meetings.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';

const SeniorDetails = ({data}) => {
    return (
        <>
            <InnerHeader value="Senior's Ministry" />
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
                                <p>Experience the richness of life's golden years in our Seniors Ministry. Foster connections, share wisdom, and embark on a journey of continued purpose and joy. Join us for fellowship, activities, and support tailored to the unique needs and experiences of our beloved Seniors' community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeniorDetails;