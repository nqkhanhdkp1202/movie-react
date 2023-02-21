import './button.scss';
import React from 'react'
import PropTypes from "prop-types";

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`}
            children={props.children}
            onClick={props.onClick ? () => props.onClick() : null
            }/>
    )
};

export const OutlineButton = props => {
    return <Button className={`btn-outline ${props.className}`}
                   children={props.children}
                   onClick={props.onClick ? () => props.onClick() : null}
    />
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;