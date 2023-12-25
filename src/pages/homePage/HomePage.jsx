import React from 'react'
import css from './HomePage.module.scss'
import Hero from '../../components/hero/Hero'
import Catalog from '../../components/catalog/Catalog'
import Cards from '../../components/Cards/Cards'

const HeroPage = () => {
	return (
			<div>
				<Hero />
				<Catalog />
				<Cards />
			</div>
	)
}

export default HeroPage
