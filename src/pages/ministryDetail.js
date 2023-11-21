import React from "react";

const MinistryDetail = ({data}) => {
    return (
        <>
            <div className='mCard_body' style={{border: '1px solid #ccc', padding: '1rem'}}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </>
    )
}

export default MinistryDetail;