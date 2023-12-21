import React from 'react'
import css from './Catalog.module.scss'

// Svg + Img

import Catalog_B from '../../assets/img/Catalog_B.png'
import Catalog1 from '../../assets/img/Catalog1.png'
import Catalog3 from '../../assets/img/Catalog3.png'
import Catalog4 from '../../assets/img/Catalog4.png'

//

const CatalogDB = [
	{
		id: 1,
		img: Catalog1,
		name: 'Кольца',
		description:
			'Медиаплан продуцирует нестандартный подход. Наряду с этим, анализ рыночных',
	},
	{
		id: 2,
		img: Catalog3,
		name: 'Гантели',
    borderR: '200px 200px 0px 0px',
		description:
			'Медиаплан продуцирует нестандартный подход. Наряду с этим, анализ рыночных',
	},
	{
		id: 3,
		img: Catalog3,
		name: 'Браслеты',
		description:
			'Медиаплан продуцирует нестандартный подход. Наряду с этим, анализ рыночных',
	},
	{
		id: 4,
		img: Catalog4,
		name: 'Серьги',
		description:
			'Медиаплан продуцирует нестандартный подход. Наряду с этим, анализ рыночных',
	},
]

const Catalog = () => {
	return (
		<div className='container'>
			<div className={css.catalog}>
				<div className={css.catalog__title}>
					<p>Каталог</p>
					<img src={Catalog_B} alt='B' />
				</div>
				<div className={css.catalog__card}>
          {CatalogDB.map(e => {
            return (
              <div className={css.catalog__card_cards} key={e.id}>
                <img  src={e.img} alt='Catalog'/>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
              </div>
            )
          })}
        </div>
			</div>
		</div>
	)
}

export default Catalog
