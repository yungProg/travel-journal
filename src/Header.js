import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'><FontAwesomeIcon icon={faEarthAmerica} className='globe'/>my travel journal</div>
    )
}

export default Header