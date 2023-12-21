import React from 'react'
import css from './HomePage.module.scss'
import Hero from '../../components/hero/Hero'
import Catalog from '../../components/catalog/Catalog'

const HeroPage = () => {
	return (
			<div>
				<Hero />
				<Catalog />
			</div>
	)
}

export default HeroPage
