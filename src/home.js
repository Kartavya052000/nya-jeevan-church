import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import church from "./assets/images/night-ministry/n4.jpg";
import gallery1 from "./assets/images/gallery1.jpeg";
import gallery2 from "./assets/images/gallery2.jpeg";
import bible from "./assets/images/bible-img.jpeg";
import eventImg from "./assets/images/eventimg.jpg";
import child from "./assets/images/poorchild.jpg";
import childBw from "./assets/images/child_bw.jpg";
import CountUp from "react-countup";
import banner1 from "./assets/images/home_page_ministries.jpeg";
import mens from "./assets/images/MENS-FELLOWSHIP1.jpg";
import women from "./assets/images/womensMinistry.jpeg";
import school from "./assets/images/KIDS2.jpg";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

var heroSlidersettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
};

var testimonialsettings = {
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "20px",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Home = () => {
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const redirectToMinistriesHuman = (type) => {
    if (type == "men") {
      navigate("/ministry/mens"); // Redirect to '/ministries/human' route
    } else if (type == "women") {
      navigate("/ministry/womens"); // Redirect to '/ministries/human' route
    } else {
      navigate("/ministry/sundayschool"); // Redirect to '/ministries/human' route
    }
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="hero_slider_sec">
        <div className="slider_inner">
          <Slider {...heroSlidersettings}>
            <div>
              <div
                className="slideItem"
                style={{ backgroundImage: `url(${banner1})` }}
              >
                <div className="slidebgOverlay"></div>
                <div className="custom-container">
                  <div className="slider_cont">
                    {/* <h3 data-aos='fade-up' data-aos-duration='1200'>Help Us with Donate</h3> */}
                    <h3 data-aos="fade-up" data-aos-duration="1200">
                      Join Our Ministries
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="1400">
                      A place to remember
                    </p>
                    <a
                      href="/ministries"
                      title="Contact Us"
                      className="butn butn_main butn_sm butn_rounded"
                      data-aos="fade-up"
                      data-aos-duration="1600"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <div
                className="slideItem"
                style={{ backgroundImage: `url(${bible})` }}
              >
                <div className="slidebgOverlay"></div>
                <div className="custom-container">
                  <div className="slider_cont">
                    <h3>Bible Study</h3>
                    <p>Understand concepts of life</p>
                    <a
                      href="#"
                      title="Contact Us"
                      className="butn butn_main butn_sm butn_rounded"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div>
              <div
                className="slideItem"
                style={{ backgroundImage: `url(${piggyBank})` }}
              >
                <div className="slidebgOverlay"></div>
                <div className="custom-container">
                  <div className="slider_cont">
                    <h3>Donate Us</h3>
                    <p>Donate for the Society</p>
                    <a
                      href="https://buy.stripe.com/7sI15U15L0hA5Y4144"
                      title="Donate Us"
                      className="butn butn_main butn_sm butn_rounded"
                    >
                      Donate Us
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </section>

      <section className="church_info_Sec">
        <div className="custom-container">
          <div className="custom_row">
            <div className="custom_col-4">
              <div className="info">
                <h6>In-Person/ Live Service Start Time</h6>
                <p>2:00 PM</p>
              </div>
            </div>
            <div className="custom_col-4">
              <div className="info">
                <h6>Address</h6>
                <p>8868 128 St, Surrey, BC V3V 5M7</p>
              </div>
            </div>
            <div className="custom_col-4 last_email">
              <div className="info">
                <h6>Email</h6>
                <p>nayajeevanchurch@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="minstry_sec">
        <div className="custom-container">
          <div className="sec_ttl" data-aos="fade-up" data-aos-duration="1500">
            <h2>
              <span>Minis</span>tries
            </h2>
            <span className="fancy_ttl">
              <i className="fa fa-child-reaching"></i>
            </span>
          </div>
          <div className="custom_row">
            <div
              className="custom_col-4"
              onClick={() => redirectToMinistriesHuman("men")}
            >
              <div className="ministryCard">
                <img src={mens} />
                <h4>Men's Ministry</h4>
                <p>
                  Empower and uplift each other on one another's spiritual
                  journey through fellowship, shared experiences.
                </p>
              </div>
            </div>
            <div
              className="custom_col-4"
              onClick={() => redirectToMinistriesHuman("women")}
            >
              <div className="ministryCard">
                <img src={women} />
                <h4>Women's Ministry</h4>
                <p>
                  Nurture and celebrate the strength and grace of one another in
                  our vibrant Women's Ministry together.
                </p>
              </div>
            </div>
            <div
              className="custom_col-4"
              onClick={() => redirectToMinistriesHuman("school")}
            >
              <div className="ministryCard">
                <img src={school} />
                <h4>Sunday School Ministry</h4>
                <p>
                  Through engaging lessons, we guide children on building a
                  strong foundation for their spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='mission_sec'>
            <div className='custom-container'>
                <div className='sec_ttl' data-aos='fade-up' data-aos-duration='1500'>
                    <h2><span>Our</span> Mission</h2>
                    <span className='fancy_ttl'>
                        <i className='fa fa-child-reaching'></i>
                    </span>
                </div>
                <div className='custom_row'>
                    <div className='custom_col-6'>
                        <div className='left_img' data-aos='fade-right' data-aos-duration='1500'>
                            <img src={childBw} alt='Our Mission' />
                        </div>
                    </div>
                    <div className='custom_col-6'>
                        <div className='mission_cont'>
                            <h4>How can you help us?</h4>
                            <div className='mis_wrap' data-aos='fade-left' data-aos-duration='1000'>
                                <div className='ic_wrap'>
                                    <i className='fa fa-hand-holding-dollar'></i>
                                </div>
                                <div className='cont'>
                                    <h5>My Title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='mis_wrap' data-aos='fade-left' data-aos-duration='1200'>
                                <div className='ic_wrap'>
                                    <i className='fa fa-hand-holding-dollar'></i>
                                </div>
                                <div className='cont'>
                                    <h5>My Title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='mis_wrap' data-aos='fade-left' data-aos-duration='1500'>
                                <div className='ic_wrap'>
                                    <i className='fa fa-hand-holding-dollar'></i>
                                </div>
                                <div className='cont'>
                                    <h5>My Title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

      {/* <section className='volunteer_sec'>
            <div className='custom-container'>
                <div className='sec_ttl' data-aos='fade-up' data-aos-duration='1500'>
                    <h2><span>Our</span> Volunteers</h2>
                    <span className='fancy_ttl'>
                        <i className='fa fa-child-reaching'></i>
                    </span>
                </div>
                <div className='custom_row'>
                    <div className='custom_col-3'>
                        <div className='voluntCard' data-aos='fade-up' data-aos-duration='1200'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <div className='volunBody'>
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
                    <div className='custom_col-3'>
                        <div className='voluntCard' data-aos='fade-up' data-aos-duration='1500'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <div className='volunBody'>
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
                    <div className='custom_col-3'>
                        <div className='voluntCard' data-aos='fade-up' data-aos-duration='1800'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <div className='volunBody'>
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
                    <div className='custom_col-3'>
                        <div className='voluntCard' data-aos='fade-up' data-aos-duration='2000'>
                            <div className='imgTop'>
                                <img src={child} alt='' />
                            </div>
                            <div className='volunBody'>
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
            </div>
        </section>

        <section className='counter_sec'>
            <div className='custom-container'>
                <div className='counter_inner'>
                    <div className='custom_row'>
                        <div className='custom_col-3'>
                            <div className='counterWrap' data-aos='fade-up' data-aos-duration='1200'>
                                <i className='fa fa-hand-holding-heart'></i>
                                <h5>Counter Text Here</h5>
                                <CountUp className='counterPercentage'
                                    start="0"
                                    end="100"
                                    duration={5}
                                    enableScrollSpy="true"
                                    scrollSpyOnce="true"
                                    suffix='%'
                                />

                            </div>
                        </div>
                        <div className='custom_col-3'>
                            <div className='counterWrap' data-aos='fade-up' data-aos-duration='1200'>
                                <i className='fa fa-hands-holding-circle'></i>
                                <h5>Counter Text Here</h5>
                                <CountUp className='counterPercentage'
                                    start="0"
                                    end="100"
                                    duration={5}
                                    enableScrollSpy="true"
                                    scrollSpyOnce="true"
                                    suffix='%'
                                />
                            </div>
                        </div>
                        <div className='custom_col-3'>
                            <div className='counterWrap' data-aos='fade-up' data-aos-duration='1200'>
                                <i className='fa fa-hands-holding-child'></i>
                                <h5>Counter Text Here</h5>
                                <CountUp className='counterPercentage'
                                    start="0"
                                    end="100"
                                    duration={5}
                                    enableScrollSpy="true"
                                    scrollSpyOnce="true"
                                    suffix='%'
                                />
                            </div>
                        </div>
                        <div className='custom_col-3'>
                            <div className='counterWrap' data-aos='fade-up' data-aos-duration='1200'>
                                <i className='fa fa-hand-holding-dollar'></i>
                                <h5>Counter Text Here</h5>
                                <CountUp className='counterPercentage'
                                    start="0"
                                    end="100"
                                    duration={5}
                                    enableScrollSpy="true"
                                    scrollSpyOnce="true"
                                    suffix='%'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

      <section className="gallery_sec">
        <div className="custom-container">
          <div className="sec_ttl" data-aos="fade-up" data-aos-duration="1500">
            <h2>
              <span>G</span>allery
            </h2>
            <span className="fancy_ttl">
              <i className="fa fa-child-reaching"></i>
            </span>
          </div>
          <div className="custom_row">
            <div
              className="custom_col-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={() => {
                navigate("/gallery");
                window.scrollTo(0, 0);
              }}
            >
              <div className="imgWrap">
                <img src={gallery1} alt="Church" />
              </div>
            </div>
            <div
              className="custom_col-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={() => {
                navigate("/gallery");
                window.scrollTo(0, 0);
              }}
            >
              {" "}
              <div className="imgWrap">
                <img src={gallery2} alt="Church" />
              </div>
            </div>
            <div
              className="custom_col-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={() => {
                navigate("/gallery");
                window.scrollTo(0, 0);
              }}
            >
              {" "}
              <div className="imgWrap">
                <img src={church} alt="Church" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='upcoming_sec'>
            <div className='custom-container'>
                <div className='sec_ttl' data-aos='fade-up' data-aos-duration='1500'>
                    <h2><span>Upcoming</span> Events</h2>
                    <span className='fancy_ttl'><i className='fa fa-child-reaching'></i></span>
                </div>
                <div className='custom_row'>
                    <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
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
                    <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
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
                    <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
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
                    <div className='custom_col-6' data-aos='fade-up' data-aos-duration='1500'>
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
                <div className='sec_btnWrap' data-aos='zoom-out' data-aos-duration='1500'>
                    <a href='#' title='View All Events' className='butn butn_main butn_rounded butn_sm'>View All Events</a>
                </div>
            </div>
        </section> */}

      {/* <section className='testimonial_sec'>
            <div className='custom-container'>
                <div className='sec_ttl' data-aos='fade-up' data-aos-duration='1500'>
                    <h2>What Our <span>Donator</span> Says</h2>
                    <span className='fancy_ttl'><i className='fa fa-child-reaching'></i></span>
                </div>
            </div>
            <div className='custom-container'>
                <div className='testimonial_inner' data-aos='zoom-in-up' data-aos-duration='1500'>
                    <Slider {...testimonialsettings}>
                        <div>
                            <div className='testiItem'>
                                <div className='testi_cont'>
                                    <p>Thanks to Charity, I now have access to education and a brighter future. They made it possible for me to pursue my dreams and break free from the cycle of poverty.</p>
                                    <div className='info'>
                                        <h3>-Rachel</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='testiItem'>
                                <div className='testi_cont'>
                                    <p>Volunteering with Charity has been a truly fulfilling experience. The team's dedication to making a difference is inspiring, and I'm proud to be part of such a compassionate community.</p>
                                    <div className='info'>
                                        <h3>-Jane</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='testiItem'>
                                <div className='testi_cont'>
                                    <p>Supporting Charity is an investment in real change. I've witnessed the impact of my donations firsthand, and it's incredible to see the tangible difference they make in the lives of those in need.</p>
                                    <div className='info'>
                                        <h3>-John</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='testiItem'>
                                <div className='testi_cont'>
                                    <p>Collaborating with Charity has strengthened our community. Their initiatives go beyond charity; they empower individuals and create sustainable positive change.</p>
                                    <div className='info'>
                                        <h3>-Jennifer</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </section> */}

      <section className="needHelp_sec">
        <div className="custom-container">
          <div
            className="needHelp_inner"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h3>We Need Your Help</h3>
            <div className="cont">
              Our Charity helps those who have no hope.
              <br />
              <br />
              Your generous donations make a significant impact in our
              community, providing essential support to those in need. With your
              contributions, we can continue our mission to uplift and empower
              individuals, ensuring that no one is left behind. Together, we
              create positive change and build a brighter future for all
            </div>
            <a
              href="#"
              title="Learn more"
              className="butn butn_main butn_rounded butn_sm"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
