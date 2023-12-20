import css from './Hero.module.scss'
import React from 'react'
import HeroImg from '../../assets/img/HeroImg.png'
import RingImg from '../../assets/img/RingImg.png'

const Hero = () => {
	return (
		<div className={css.heroBg}>
			<div className='container'>
				<div className={css.hero}>
					<div className={css.hero__image}>
						<div className={css.hero__image_one}>
							<img src={HeroImg} alt='Hero' />
						</div>
						<div className={css.hero__image_two}>
							<img src={RingImg} alt='Hero' />
						</div>
					</div>
					<div className={css.hero__text}>
						<h1 className={css.hero__title}>
							Кольцо из Белого золота с бриллиантами
						</h1>
						<div className={css.hero__text_info}>
							<div className={css.material}>
								<p>Материал</p>
								<p>Красное золото 585 пробы</p>
							</div>
							<div className={css.weight}>
								<p>Примерный вес</p>
								<p>0.86 г</p>
							</div>
							<div className={css.bet}>
								<p>Вставка</p>
								<p>Бриллиант (23 шт, 0.069 карат)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
