import React from "react";
import InnerHeader from "../components/innerHeader";
import aboutImg from '../assets/images/night-ministry/n4.jpg';
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
                                <p>"Being a part of NightShift Ministries has allowed us at Naya Jeevan Church to serve the less fortunate community of Surrey. We get to show love by providing hot meals, counsel and conversation. 
It is important for us at Naya Jeevan to be a part of outreach, as it is the vital bridge between us and our community. It embodies the spirit of connection; reaching out to individuals and groups to engage, assist and uplift!"</p>
<p>Matthew 25:35-36
"For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in, I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nightshift;