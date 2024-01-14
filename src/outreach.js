import React from "react";
import InnerHeader from "./components/innerHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './assets/css/outreach.css'; 

const Outreach = () => {
    return (
        <>
            <InnerHeader value='Outreach' />

            <section className='outreach_sec'>
                <div className='custom-container'>
                <Tabs>
                    <TabList>
                        <Tab>Fiji</Tab>
                        <Tab>Pakistan</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Fiji Missions</h2>
                        <p>“WOWS Kids Foundation is a registered Charitable Organization located in Suva, Fiji Islands and
                            is the only organization in Fiji that works specifically on all child cancer related matters in the
                            country. The organization works in close collaboration with the Ministry of Health and Medical
                            Services to coordinate and provide support for families with children living with cancer in their
                            journey and equally important, raise awareness on child cancer issues in the country. The
                            organization also provides support for children from the other Pacific Island Countries that
                            come to Fiji for cancer treatment.”
                            Naya Jeevan Church is so grateful to be a part of supporting an amazing cause like WOWS Kids.
                            Helping a charitable foundation like WOWS is not just about giving; it's about being an agent of
                            compassion and transformation. Whether large or small, every contribution adds up to create a
                            collective force for good, making a tangible difference in the lives of those the foundation
                            serves. Together, we can create a better, more equitable world for everyone!
                            <br/>
                            How can you help? Click the link below and become a part of changing these beautiful lives!:
                            https://wowskids.org
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Pakistan Missions</h2>
                        <p>In addition to supporting WOWS Kids Foundation in Fiji, Naya Jeevan has also been greatly
                        blessed with the opportunity to assist in Pakistan. Naya Jeevan has been privileged to open an
                        Orphanage Center, a NJ Church, a Medical Clinic and a Community Tailoring Center.
                        Naya Jeevan’s vision and heart is that any child that is in need receives the assistance they
                        need, when they need it; and is kept comfortable and safe. Naya Jeevan also wants the
                        Community to have a place to get Medical Assistance, Tailor their clothing items, and a place of
                        prayer and worship- fully available for them, any time they need it!
                        Extending a helping hand to countries that are in need is a powerful expression of global
                        solidarity and compassion. Many nations face challenges such as poverty, lack of access to
                        education, inadequate healthcare, and insufficient infrastructure. By engaging in initiatives that
                        support these countries, we can contribute to creating positive and sustainable change..
                        <br/>
                        “Remember the words of the Lord Jesus, that He Himself said, 'It is more blessed to give than
                        to receive'”- Acts 20:35.
                        <br/>
                        Want to help? Contact Us to find out how you can be a part of this positive and amazing
                        change!
                        </p>
                    </TabPanel>
                </Tabs>
                </div>
            </section>
        </>
    )
}
export default Outreach;