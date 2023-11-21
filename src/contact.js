import React from "react";
import InnerHeader from "./components/innerHeader";
import { Form } from "rsuite";

const Contact = () => {
    return (
        <>
            <InnerHeader value='Contact' />

            <section className='contact_sec'>
                <div className='contact_inner'>
                    <div className='custom-container'>
                        <div className='contForm'>
                        <Form>
                            <div className='formGrp'>
                                <label for='name'>Name</label>
                                <input type='text' placeholder='Enter Your Name' id='name' />
                            </div>
                            <div className='formGrp'>
                                <label for='email'>Email</label>
                                <input type='email' placeholder='Enter Your Email' id='email' />
                            </div>
                            <div className='formGrp'>
                                <label for='subject'>Subject</label>
                                <input type='text' placeholder='Type The Subject' id='subject' />
                            </div>
                            <div className='formGrp'>
                                <label for='msg'>Message</label>
                                <textarea placeholder='Type Your Message Here...' id='msg'></textarea>
                            </div>
                            <div className='formSubmit'>
                                <input type='submit' value='Submit' className='fullButn butn butn_main' />
                            </div>
                        </Form>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Contact;