import React from "react";
import css from "./cards.module.scss";
import HeartIcon from "../../assets/svg/hear.svg";
import ring1 from '../../assets/img/shakek1.png'
import ring2 from '../../assets/img/shakek2.png'
import ring3 from '../../assets/img/shakek3.png'



const cardProduct = [
    {
        id:1,
        newProduct:"Новинка",
        images:[ring1,ring2,ring3],
        text:"Новинка Кольцо из белого золота с бриллиантами",
        price:"5 990 ₽"
    },
    {
        id:2,
        newProduct:"Новинка",
        images:[ring1,ring2,ring3],
        text:"Новинка Кольцо из белого золота с бриллиантами",
        price:"5 990 ₽"
    },
    {
        id:3,
        newProduct:"Новинка",
        images:[ring1,ring2,ring3],
        text:"Новинка Кольцо из белого золота с бриллиантами",
        price:"5 990 ₽"
    },
    {
        id:4,
        newProduct:"Новинка",
        images:[ring1,ring2,ring3],
        text:"Новинка Кольцо из белого золота с бриллиантами",
        price:"5 990 ₽"
    },
]

const Cards = () => {
  return (
    <section className={css.interesting}>
      <div className="container">
        <h1 className={css.interesting__title}>Вам будет интересно </h1>
        <div className={css.cards}>
        {cardProduct.map( ({ text,price,images,newProduct}) => {
            return (        
          <div className={css.interesting__card}>
            <div className={css.card__header}>
              <p>Новинка</p>
              <div>
                <img src={HeartIcon} />
              </div>
            </div>
            <div className={css.card__img}>
              <img src={images[0]} alt="Goldem image" />
            </div>
            <div className={css.card__indicators}>
              <div className={css.card__indicator}></div>
              <div className={css.card__indicator}></div>
              <div className={css.card__indicator}></div>
            </div>
            <div className={css.card__text}>
              <h4>{text} </h4>
              <h6>
              5 990 ₽
              </h6>
            </div>
          </div>)})
          }

        </div>
      </div>
    </section>
  );
};

export default Cards;
