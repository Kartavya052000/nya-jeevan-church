import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/mensmeet.jpeg';
import AOS from "aos";
import 'aos/dist/aos.css';

const MinistryDetail = ({data}) => {
    return (
        <>
            <InnerHeader value="Men's Ministry" />
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
                                <p>Empower and uplift each other on one another's spiritual journey through fellowship, meaningful
                                    discussions, and shared experiences in our dynamic Men's Ministry. Join us in building a strong
                                    community of support, growth, and faith!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MinistryDetail;