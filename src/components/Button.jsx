import React from 'react'

const Button = ({ title, colors }) => {
    return (
        <button className="custom-button" style={{ backgroundColor: colors }}>
            {title}
            <div className='btnLayer' />
        </button>
    )
}

export default Button