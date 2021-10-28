import React from 'react'
import { APP_NAME } from '../utils/config'

const Img = (props:any) => {
    return (
        <img
            alt={APP_NAME}
            {...props}
        />
            
    )
}

export default Img
