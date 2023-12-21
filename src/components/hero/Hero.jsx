import css from './hero.module.scss'
import kyz1 from '../../assets/img/HeroImg.png'
import altyn from '../../assets/img/RingImg.png'
import Button  from '../UI/button/Button'


const Hero = () => {  
  return (
    <div className={css.heroBg}>

    <div className='container'>
      <div className={css.hero}>
        <div className={css.hero__image}>
          <div className={css.hero__image__one}>
            <img src={kyz1} alt=''/>
          </div>
          <div className={css.hero__image__two}>
            <img src={altyn} alt=''/>
          </div>
        </div>




        <div className={css.hero__text}>
          <h1 className={css.hero__title}>Кольцо из Белого золота с бриллиантами</h1>
          <div className={css.hero__text_info}>
            <div className={css.material}>
              <p>Материал</p>
              <p className={css.empty}></p>
              <p>Красное золото 585 пробы</p>
            </div>
            <div className={css.weight}>
              <p>Примерный вес</p>
              <p className={css.empty}></p>
              <p>0.86 г</p>
            </div>
            <div className={css.bet}>
              <p>Вставка</p>
              <p className={css.empty}></p>
              <p>Бриллиант (23 шт, 0.069 карат)</p>
            </div>
          </div>
          <Button>Подробнее</Button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Hero