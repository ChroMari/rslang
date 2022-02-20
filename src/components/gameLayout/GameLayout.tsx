import './gameLayoutStyle.scss';

import game1 from '../../assets/game-1.png';
import game2 from '../../assets/game-2.png';
import { NavLink } from 'react-router-dom';

const GameLayout = () => {
  return (
    <section className="game">
      <div className="game__wrapper">
        <h2 className="attribute__title">Игры</h2>
        <p className="attribute__subtitle">Английский можно учить интересно и по-настоящему наслаждаться процессом</p>

        <div className="game__cards">
          <div className="game__card">
            <img className="game__card-img" src={game1} alt="game img"/>
            <h3 className="game__card-title">Аудиовызов</h3>
            <p className="game__card-text">Улучшает восприятие английской речи на слух.</p>
            <NavLink to={'/audiocall'}><button className="game__card-button">Играть</button></NavLink>
          </div>
          <div className="game__card">
            <img className="game__card-img" src={game2} alt="game img"/>
            <h3 className="game__card-title">Спринт</h3>
            <p className="game__card-text">Учит быстро переводить с
              английского  на ваш родной язык. </p>
            <NavLink to={'/sprint'}><button className="game__card-button">Играть</button></NavLink>
          </div>
        </div>

      </div>
    </section>
  )
};

export {GameLayout};
