import React from "react";
import InnerHeader from "../components/innerHeader";

const OutreachDetail = () => {
    return (
        <>

        <InnerHeader value='Outreach Detail' />

        <section className='outreach_dets'>
            <div className='custom-container'>
                <div className='custom_row'>
                    <div className='custom_col-4'>
                        <div className='outreach_card'>
                            <h4>UnderPrivileged families</h4>
                        </div>
                    </div>
                    <div className='custom_col-4'>
                        <div className='outreach_card'>
                            <h4>Build Homes</h4>
                        </div>
                    </div>
                    <div className='custom_col-4'>
                        <div className='outreach_card'>
                            <h4>WOWS (Walk on, Walk Strong)</h4>
                        </div>
                    </div>
                    <div className='custom_col-4'>
                        <div className='outreach_card'>
                            <h4>Kid's Cancer</h4>
                        </div>
                    </div>
                    <div className='custom_col-4'>
                        <div className='outreach_card'>
                            <h4>Night Shift Ministries</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default OutreachDetail;