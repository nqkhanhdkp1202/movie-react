import React from 'react'
import './pageheadline.scss'

import bg from '../../assets/footer-bg.jpg'

const PagesHeadline = props => {

    return (
        <div className='page-headline' style={{ backgroundImage: `url(${bg})` }}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default PagesHeadline