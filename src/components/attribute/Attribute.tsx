import './attributeStyle.scss';

import game from '../../assets/game.png';
import online from '../../assets/online.png';
import staticImg from '../../assets/static.png';

const Attribute = () => {
  return (
    <section className="attribute">
      <div className="attribute__wrapper">
        <h2 className="attribute__title">Особенности</h2>
        <p className="attribute__subtitle">Что полезного вы найдете в нашем приложении для себя и своей семьи</p>
        <div className="attribute__cards">

          <div className="attribute__card">
            <img className="attribute__card-img" src={game} alt="img game"/>
            <h3 className="attribute__card-title">ИГРА</h3>
            <p className="attribute__card-text">Изучать новое интереснее во время игры. </p>
          </div>

          <div className="attribute__card">
            <img className="attribute__card-img" src={online} alt="img online"/>
            <h3 className="attribute__card-title">ОНЛАЙН ДОСТУП</h3>
            <p className="attribute__card-text">В отличии от оффлайн курсов
              наши игры доступны всегда</p>
          </div>

          <div className="attribute__card">
            <img className="attribute__card-img" src={staticImg} alt="static img"/>
            <h3 className="attribute__card-title">СТАТИСТИКА</h3>
            <p className="attribute__card-text">Вам всегда доступна
              статистика для любой игры</p>
          </div>

        </div>
      </div>
    </section>
  )
};

export {Attribute};
