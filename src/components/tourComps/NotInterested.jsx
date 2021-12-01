import React from 'react'
import Delete from './Delete'

function NotInterested(props) {
    return (
        <>
            <Delete delete={props.delete} id={props.id}/>
        </>
    )
}

export default NotInterested
