import React, { useEffect } from "react";
import InnerHeader from "./components/innerHeader";
import gallery1 from "./assets/images/gallery1.jpeg";
import poor from "./assets/images/poor.jpg";
import menMeet from "./assets/images/menmeeting.jpg";
import womenMeet from "./assets/images/women_meeting.jpg";
import seniorMeet from "./assets/images/senior_meetings.jpg";
import childMeet from "./assets/images/children_meet.jpg";
import nightShift from "./assets/images/nightShift.jpg";
import MinistryDetail from "./pages/MensministryDetail";
import AOS from "aos";
import "aos/dist/aos.css";

import SundaySchool from "./pages/SundaySchool";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const pakimages = [
    {
      original: require("../src/assets/images/njc-pak/pak1.jpeg"),
    },
    {
      original: require("../src/assets/images/njc-pak/pak2.jpeg"),
    },
    {
      original: require("../src/assets/images/njc-pak/pak3.jpeg"),
    },
    {
      original: require("../src/assets/images/njc-pak/pak4.jpeg"),
    },
    {
        original: require("../src/assets/images/pak3.jpeg"),
      },
      {
        original: require("../src/assets/images/njc-pak/pak7.jpeg"),
      },
  ];
  const wowimages = [
    {
      original: require("../src/assets/images/njc-wow/wow1.jpeg"),
    },
    {
      original: require("../src/assets/images/njc-wow/wow2.jpeg"),
    },
    {
      original: require("../src/assets/images/njc-wow/wow3.jpeg"),
    },
    {
      original: require("../src/assets/images/njc-wow/wow4.jpeg"),
    },
    {
        original: require("../src/assets/images/wow1.jpeg"),
      },
      {
        original: require("../src/assets/images/wow3.jpeg"),
      },
  ];
  const christmasImage = [
    // {
    //   original: require("../src/assets/images/njc-church/church1.jpeg"),
    // },
    {
        original:gallery1
    },
    {
        original: require("../src/assets/images/njc-church/church2.jpeg"),
      },
      {
        original: require("../src/assets/images/njc-church/church3.jpeg"),
      },
      {
        original: require("../src/assets/images/njc-church/church4.jpeg"),
      },
  ];
  const activitiesImage = [
 
    {
        original: require("../src/assets/images/night-ministry/n1.jpg"),
      },
      {
        original: require("../src/assets/images/night-ministry/n2.jpg"),
      },
      {
        original: require("../src/assets/images/night-ministry/n3.jpg"),
      },
      {
        original: require("../src/assets/images/night-ministry/n4.jpg"),
      },
      {
        original: require("../src/assets/images/night-ministry/n5.jpg"),
      },
    
  ];
  return (
    <>
      <InnerHeader value="Gallery" />

      {/* <section className='gallery_sec'>
                <div className='custom-container'>
                    <div className='gallery_Inner'>
                        <div className='custom_row'>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={gallery1} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={menMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={womenMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={seniorMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={childMeet} alt='Poor' />
                                </div>
                            </div>
                            <div className='custom_col-4' data-aos='fade-up' data-aos-duration='1500'>
                                <div className='imgWrap'>
                                    <img src={nightShift} alt='Poor' />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section> */}
      <section className="outreach_sec gallery">
        <Tabs>
          <TabList>
            <Tab>Pakistan</Tab>
            <Tab>Wow Foundation</Tab>
            <Tab>Christmas</Tab>
            <Tab>Events</Tab>
          </TabList>

          <TabPanel>
            <section className="gallery_sec">
              <div className="custom-container">
                <div className="gallery_Inner">
                  <div className="custom_row">
                    {pakimages.map(
                      (
                        item,
                        index // Use map() to iterate over pakimages
                      ) => (
                        <div
                          key={index}
                          className="custom_col-4"
                          data-aos="fade-up"
                          data-aos-duration="1500"
                        >
                          <div className="imgWrap">
                            <img src={item.original} alt="Image" />{" "}
                            {/* Render image with src from item.original */}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="gallery_sec">
              <div className="custom-container">
                <div className="gallery_Inner">
                  <div className="custom_row">
                    {wowimages.map(
                      (
                        item,
                        index // Use map() to iterate over pakimages
                      ) => (
                        <div
                          key={index}
                          className="custom_col-4"
                          data-aos="fade-up"
                          data-aos-duration="1500"
                        >
                          <div className="imgWrap">
                            <img src={item.original} alt="Image" />{" "}
                            {/* Render image with src from item.original */}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="gallery_sec">
              <div className="custom-container">
                <div className="gallery_Inner">
                  <div className="custom_row">
                    {christmasImage.map(
                      (
                        item,
                        index // Use map() to iterate over pakimages
                      ) => (
                        <div
                          key={index}
                          className="custom_col-4"
                          data-aos="fade-up"
                          data-aos-duration="1500"
                        >
                          <div className="imgWrap">
                            <img src={item.original} alt="Image" />{" "}
                            {/* Render image with src from item.original */}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
          <section className="gallery_sec">
              <div className="custom-container">
                <div className="gallery_Inner">
                  <div className="custom_row">
                    {activitiesImage.map(
                      (
                        item,
                        index // Use map() to iterate over pakimages
                      ) => (
                        <div
                          key={index}
                          className="custom_col-4"
                          data-aos="fade-up"
                          data-aos-duration="1500"
                        >
                          <div className="imgWrap">
                            <img src={item.original} alt="Image" />{" "}
                            {/* Render image with src from item.original */}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default Gallery;
