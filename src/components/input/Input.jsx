import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
    return (
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange ? (e) => props.onChange(e) : null} />
    )
}


export default Input