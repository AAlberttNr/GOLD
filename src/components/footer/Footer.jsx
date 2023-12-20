import React from 'react'
import css from './Footer.module.scss'

// Img + Svg

import Logo from '../../assets/svg/Logo.svg'

/// ---------------------------------------------------
// Componets

import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

/// ---------------------------------------------------


const menu = [
	{
		title: 'Главная',
		patch: '/',
	},
	{
		title: 'Каталог',
		patch: 'catalog',
	},
	{
		title: 'О Компании',
		patch: 'about',
	},
	{
		title: 'Контакты',
		patch: 'contacts',
	},
]

const Footer = () => {
	return (
		<footer className={css.Footer}>
			<div className='container'>
				<div className={css.footer}>
					<div>
						<img src={Logo} alt='Logo' />
					</div>
					<ol>
						{menu.map(({ title, patch }) => (
							<Link to={patch}>{title}</Link>
						))}
					</ol>
					<div className={css.footer__phone}>
						<p>8 800 111-11-11</p>
						<p>с 9:00 - до 18:00</p>
					</div>
					<div className={css.footer__button}>
						<Button>Регистрация</Button>
					</div>
				</div>
				<div className={css.footer__line}></div>
				<div className={css.footer__under}>
					<p>© Bassco 2022</p>
					<p>Политика конфиденциальности</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
