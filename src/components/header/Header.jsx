import React from 'react'
import css from './Header.module.scss'


// Componets
import Button from '../UI/Button/Button'

// SVG

import Logo from '../../assets/svg/Logo.svg'

//

const Header = () => {
	return (
		<div className='container'>
			<div className={css.header}>
				<div>
					<img src={Logo} alt='Logo' />
				</div>

				<div>
					<div className={css.header__phone}>
						<p>8 800 111-11-11</p>
						<p>Заказать Звонок</p>
					</div>

					<div className={css.header__email}>
						<p>info@bassco.ru</p>
						<p>По любым вопросам</p>
					</div>

					<div className={css.header__button}>
						<Button>Сотрудничество</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
