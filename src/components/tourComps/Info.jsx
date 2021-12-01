import React from 'react'
import { useState } from 'react';

function Info(props) {
    const [showMore, setshowMore]=useState(false)
    return (
        <div>
            {showMore?props.info:`${props.info.substring(0,250)}...`}
            <button onClick={() => setshowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </button>
        </div>
    )
}

export default Info
