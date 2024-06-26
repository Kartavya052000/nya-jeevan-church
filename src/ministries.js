import React, { useEffect, useState } from "react";
import InnerHeader from "./components/innerHeader";
import AOS from "aos";
import 'aos/dist/aos.css';
import prayer from './assets/images/prayer.jpg';
import bibleStudy from './assets/images/bibleStudy.jpg';
import menMeet from './assets/images/MENS-FELLOWSHIP1.jpg';
import womenMeet from './assets/images/womensMinistry.jpeg';
import seniorMeet from './assets/images/SENIORSADIES2.jpg';
import childMeet from './assets/images/KIDS3.jpg';
import nightShift from './assets/images/nightshift_thumbnail.png';
import BibleStudy from './assets/images/Bible_Study_1.jpg';
import MinistryDetail from "./pages/MensministryDetail";
import { Link } from "react-router-dom";

const Ministries = () => {

    const [active, setActive] = useState(false);

    const [data, setData] = useState(null);

    useEffect(() => {
        AOS.init({once: true});
    }, [])

    const cards = [

        {
           
            id: '3', title : "Night Shift Ministry",
            route:"nightshift",
            description: 'Lorem Ipsum dolor sit amet....',
            img: nightShift
        },
        {
            id: '4', title : "Women's Ministry",route:"womens",
            description: 'Lorem Ipsum dolor sit amet....',
            img: womenMeet
        },
        {
            id: '5', title : "Senior's Ministry",route:"senior",
            description: 'Lorem Ipsum dolor sit amet....',
            img: seniorMeet
        },
        {
            id: '6', title : "Sunday School Ministry",route:"sundayschool",
            description: 'Lorem Ipsum dolor sit amet....',
            img: childMeet
        },
        {
            id: '7', title : "Men's Ministry",
            route:"mens",

            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur massa eu massa fermentum, eget condimentum neque cursus. Suspendisse eget faucibus quam. Curabitur accumsan arcu fermentum porta ultrices. Integer volutpat egestas tortor tempus tincidunt. Nulla et varius massa, ac laoreet nisi. Aenean id mi bibendum, fermentum ex eu, euismod tellus. Maecenas facilisis metus id molestie pellentesque. Cras facilisis tempus tincidunt. Nunc imperdiet nisl ut sapien egestas, non tincidunt nisl facilisis. In varius nibh interdum finibus feugiat. Curabitur justo sem, facilisis at lectus eu, iaculis pharetra purus. Fusce cursus massa quis mauris pharetra venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget velit sodales ex sollicitudin sodales. Vivamus rhoncus consequat nibh vitae cursus. Mauris lacinia ac elit vitae maximus. Ut vitae ligula sed magna porttitor iaculis ut bibendum metus. Nullam tincidunt nisi ut nibh fringilla tempor. Praesent elit massa, congue at laoreet vitae, elementum eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel mauris eget erat aliquam tempus at ut enim. Donec semper nunc ut urna tincidunt, sit amet convallis nisi aliquam. Nam velit turpis, placerat eget metus ac, semper tristique enim.',
            img: menMeet
        },
        {
           
            id: '8', title : "Bible Study Ministry",
            route:"bible-study",
            description: 'Lorem Ipsum dolor sit amet....',
            img: BibleStudy
        },
    ]

    return (
        <>
            <InnerHeader value='Ministries' />

            <section className='ministries_sec'>
                <div className='custom-container'>
                    <div className='ministries_inner'>
                        <div className='custom_row'>
                            {cards.map((item, i) => {
                                return (
                                    <>
                                        <div className={`custom_col-6 ${active === i ? 'activeCard' : ''}`} key={item.id}>
                                            <Link className='mcard_link' key={item.id} to={`/ministry/${item.route}`}  data-aos='fade-up' data-aos-duration='1500'>
                                                <div className='ministryCard'>
                                                {item.id === 3 ? (
                        <img src={item.img} style={{ objectFit: 'contain' }} />
                    ) : (
                        <img src={item.img} />
                    )}
                                                    {(active === i ?
                                                        data != null ?
                                                            <MinistryDetail data={data} /> :
                                                            ''
                                                            : ''
                                                    )}
                                                    <div className='ttlCard'>
                                                        <h5 className='card_ttl'>{item.title}</h5>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ministries;