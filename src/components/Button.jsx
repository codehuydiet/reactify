import React from 'react'

const Button = ({ title, colors, textColor }) => {
    return (
        <button className="custom-button" style={{ backgroundColor: colors, color: textColor }}>
            {title}
            <div className='btnLayer' />
        </button>
    )
}

export default Button