import React from "react";
import InnerHeader from "../components/innerHeader";
import eventBanner from "../assets/images/eventbanner.jpg";

const EventDets = () => {
    return (
        <>
            <InnerHeader  value='Events Detail' />

            <section className='event_detail_sec'>
                <div className='custom-container'>
                    <div className='evnt_det_inner'>
                        <div className='cont_Wrap'>
                            <div className='main_img'>
                                <img src={eventBanner} alt='Event Banner' />
                            </div>
                            <h2 className='main_ttl'>Event name will go here</h2>
                            <div className='eventInfo'>
                                <div>
                                    <i className='fa fa-calendar'></i>
                                    <span> January 11, 2024</span>
                                </div>
                                <div>
                                    <i className='fa fa-clock'></i>
                                    <span> 7:00 PM</span>
                                </div>
                                <div>
                                    <i className='fa fa-map-marker-alt'></i>
                                    <span> Glasgow</span>
                                </div>
                            </div>
                            <div className='mainCont'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum nec odio eget placerat. Donec posuere ullamcorper orci, ac facilisis sem pharetra ac. Fusce id magna ac nibh bibendum tempor. Vivamus tempus sem eget justo feugiat, at placerat ipsum pulvinar. Proin at rutrum mi. Phasellus vehicula luctus erat, ac iaculis tellus. Mauris eu tortor in nulla laoreet porta dapibus suscipit mi. Mauris id metus rutrum justo tincidunt posuere. Vivamus scelerisque massa eu nunc condimentum, ac ultricies nisi volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque lacinia ultricies porta.</p>
                                <p>Donec faucibus semper leo vel auctor. Donec in fringilla orci. Praesent ut libero in elit iaculis tempor ac nec ante. Curabitur dictum massa enim. Integer sem mauris, pellentesque eget diam et, molestie dictum ante. Morbi posuere ex ut blandit eleifend. Pellentesque nec diam purus. In luctus, dui sed feugiat pellentesque, massa risus gravida ipsum, vel euismod lectus felis sit amet metus.</p>
                                <p>Morbi a sem vel dolor varius pretium ut vitae magna. Nam convallis fringilla erat quis pretium. Nullam id turpis dui. Curabitur ultrices felis quam, a mollis erat suscipit sed. Donec odio nunc, consequat eu iaculis quis, placerat id elit. Vestibulum hendrerit ullamcorper maximus. Quisque eu porta turpis. Sed quis erat magna. Aenean ornare neque nec lacus cursus facilisis. Maecenas eu ornare turpis.</p>
                                <p>Morbi euismod ex ut scelerisque finibus. Nullam eleifend magna velit, nec luctus dui imperdiet vitae. Phasellus sodales eros pharetra, accumsan massa blandit, ultrices mi. In imperdiet sem sit amet nisl iaculis elementum. Nunc commodo dolor at nunc maximus vestibulum. Nunc aliquam pulvinar ante eu semper. Curabitur dignissim neque non elementum convallis. Morbi ipsum sem, mattis volutpat justo non, varius bibendum ipsum. In blandit sem sit amet nulla iaculis, non viverra est aliquet. In egestas posuere nunc, vitae mattis risus tristique et. Nunc nec feugiat velit. Vivamus in ullamcorper tellus, nec pharetra enim. Suspendisse potenti. Sed id orci at lectus varius placerat sit amet et tortor. Nulla quis aliquet elit. Vivamus vulputate quis sapien et fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventDets;