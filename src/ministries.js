import React, { useEffect, useState } from "react";
import InnerHeader from "./components/innerHeader";
import AOS from "aos";
import 'aos/dist/aos.css';
import prayer from './assets/images/prayer.jpg';
import bibleStudy from './assets/images/bibleStudy.jpg';
import menMeet from './assets/images/menmeeting.jpg';
import womenMeet from './assets/images/women_meeting.jpg';
import seniorMeet from './assets/images/senior_meetings.jpg';
import childMeet from './assets/images/children_meet.jpg';
import MinistryDetail from "./pages/ministryDetail";
import { Button } from "rsuite";

const Ministries = () => {

    const [active, setActive] = useState(false);

    const handleButtonClick = (index) => {
        setActive(index);
    };

    const [data, setData] = useState(null);

    useEffect(() => {
        AOS.init({once: true});
    }, [])

    const cards = [
        {id: '1', title : 'Prayer Meetings', description: 'Lorem Ipsum dolor sit amet....', img: {prayer}},
        {id: '2', title : 'Bible Study', description: 'Lorem Ipsum dolor sit amet....', img: {bibleStudy}},
        {id: '3', title : "Men's Meeting", description: 'Lorem Ipsum dolor sit amet....', img: {menMeet}},
        {id: '4', title : "Women's Meeting", description: 'Lorem Ipsum dolor sit amet....', img: {womenMeet}},
        {id: '5', title : "Senior's Meeting", description: 'Lorem Ipsum dolor sit amet....', img: {seniorMeet}},
        {id: '6', title : "Children's Secondary School", description: 'Lorem Ipsum dolor sit amet....', img: {childMeet}},
    ]

    // const handleClick = () => {
    //     // setData('jhfjh');
    //     console.log(cards);
    //     setData(cards.title);
    // }

    return (
        <>
            <InnerHeader value='Ministries' />

            <section className='ministries_sec'>
                <div className='custom-container'>
                    <div className='custom_row'>
                        {cards.map((item, i) => {
                            return (
                                <>
                                    <div className={`custom_col-6 ${active === i ? 'activeCard' : ''}`} key={item.id}>
                                        <div className='ministryCard' data-aos='fade-up' data-aos-duration='1500'>
                                            <img src={item.img} />
                                            {(active === i ?
                                                data != null ?
                                                    <MinistryDetail data={data} /> :
                                                    ''
                                                    : ''
                                            )}
                                            <Button className='mcard_link' onClick={() => setData(item) + handleButtonClick(i)}>{item.title}</Button>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ministries;