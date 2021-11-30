import React from 'react'
import { useState } from 'react';

function Info(props) {
    const [showMore, setshowMore]=useState(false)
    return (
        <div className="">
            {showMore?props.info:`${props.info.substring(0,250)}...`}
            <button className="" onClick={() => setshowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </button>
        </div>
    )
}

export default Info
