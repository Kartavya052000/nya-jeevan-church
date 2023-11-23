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
        {
            id: '1', title : 'Prayer Meetings',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur massa eu massa fermentum, eget condimentum neque cursus. Suspendisse eget faucibus quam. Curabitur accumsan arcu fermentum porta ultrices. Integer volutpat egestas tortor tempus tincidunt. Nulla et varius massa, ac laoreet nisi. Aenean id mi bibendum, fermentum ex eu, euismod tellus. Maecenas facilisis metus id molestie pellentesque. Cras facilisis tempus tincidunt. Nunc imperdiet nisl ut sapien egestas, non tincidunt nisl facilisis. In varius nibh interdum finibus feugiat. Curabitur justo sem, facilisis at lectus eu, iaculis pharetra purus. Fusce cursus massa quis mauris pharetra venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget velit sodales ex sollicitudin sodales. Vivamus rhoncus consequat nibh vitae cursus. Mauris lacinia ac elit vitae maximus. Ut vitae ligula sed magna porttitor iaculis ut bibendum metus. Nullam tincidunt nisi ut nibh fringilla tempor. Praesent elit massa, congue at laoreet vitae, elementum eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel mauris eget erat aliquam tempus at ut enim. Donec semper nunc ut urna tincidunt, sit amet convallis nisi aliquam. Nam velit turpis, placerat eget metus ac, semper tristique enim.',
            img: prayer
        },
        {
            id: '2', title : 'Bible Study',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur massa eu massa fermentum, eget condimentum neque cursus. Suspendisse eget faucibus quam. Curabitur accumsan arcu fermentum porta ultrices. Integer volutpat egestas tortor tempus tincidunt. Nulla et varius massa, ac laoreet nisi. Aenean id mi bibendum, fermentum ex eu, euismod tellus. Maecenas facilisis metus id molestie pellentesque. Cras facilisis tempus tincidunt. Nunc imperdiet nisl ut sapien egestas, non tincidunt nisl facilisis. In varius nibh interdum finibus feugiat. Curabitur justo sem, facilisis at lectus eu, iaculis pharetra purus. Fusce cursus massa quis mauris pharetra venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget velit sodales ex sollicitudin sodales. Vivamus rhoncus consequat nibh vitae cursus. Mauris lacinia ac elit vitae maximus. Ut vitae ligula sed magna porttitor iaculis ut bibendum metus. Nullam tincidunt nisi ut nibh fringilla tempor. Praesent elit massa, congue at laoreet vitae, elementum eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel mauris eget erat aliquam tempus at ut enim. Donec semper nunc ut urna tincidunt, sit amet convallis nisi aliquam. Nam velit turpis, placerat eget metus ac, semper tristique enim.',
            img: bibleStudy
        },
        {
            id: '3', title : "Men's Meeting",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur massa eu massa fermentum, eget condimentum neque cursus. Suspendisse eget faucibus quam. Curabitur accumsan arcu fermentum porta ultrices. Integer volutpat egestas tortor tempus tincidunt. Nulla et varius massa, ac laoreet nisi. Aenean id mi bibendum, fermentum ex eu, euismod tellus. Maecenas facilisis metus id molestie pellentesque. Cras facilisis tempus tincidunt. Nunc imperdiet nisl ut sapien egestas, non tincidunt nisl facilisis. In varius nibh interdum finibus feugiat. Curabitur justo sem, facilisis at lectus eu, iaculis pharetra purus. Fusce cursus massa quis mauris pharetra venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget velit sodales ex sollicitudin sodales. Vivamus rhoncus consequat nibh vitae cursus. Mauris lacinia ac elit vitae maximus. Ut vitae ligula sed magna porttitor iaculis ut bibendum metus. Nullam tincidunt nisi ut nibh fringilla tempor. Praesent elit massa, congue at laoreet vitae, elementum eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel mauris eget erat aliquam tempus at ut enim. Donec semper nunc ut urna tincidunt, sit amet convallis nisi aliquam. Nam velit turpis, placerat eget metus ac, semper tristique enim.',
            img: menMeet
        },
        {id: '4', title : "Women's Meeting", description: 'Lorem Ipsum dolor sit amet....', img: womenMeet},
        {id: '5', title : "Senior's Meeting", description: 'Lorem Ipsum dolor sit amet....', img: seniorMeet},
        {id: '6', title : "Children's Secondary School", description: 'Lorem Ipsum dolor sit amet....', img: childMeet},
    ]

    return (
        <>
            <InnerHeader value='Ministries' />

            <section className='ministries_sec'>
                <div className='custom-container'>
                    <div className='custom_row'>
                        {cards.map((item, i) => {
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
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ministries;