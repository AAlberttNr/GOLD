import React from 'react'
import css from './Footer.module.scss'

// Img + Svg

import Logo from '../../assets/svg/Logo.svg'

// ---------------------------------------------------
const Footer = () => {
	return (
		<footer className={css.Footer}>
			<div className='container'>
        <div className={css.footer}></div>
      </div>
		</footer>
	)
}

export default Footer
