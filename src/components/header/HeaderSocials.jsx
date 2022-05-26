import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.instagram.com/imamsudarajat4/"><BsInstagram/></a>
        <a href="https://github.com/imamsudarajat04"><FaGithub/></a>
        {/* <a href="#" target="_blank"></a> */}
    </div>
  )
}

export default HeaderSocials