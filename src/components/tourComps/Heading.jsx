import React from 'react'
import Price from './Price'

function Heading(props) {
    return (
        <div className='tour-info'>
        <h4 className="h4">{props.name}</h4>
        <Price price={props.price}/>
        </div>
    )
}

export default Heading
