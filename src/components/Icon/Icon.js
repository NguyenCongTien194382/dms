import React from 'react'

const Icon = ({ icon }) => {
    return (
        <img
            src={`/assets/icons/${icon}`}
            alt='icon'
        />
    )
}

export default Icon