import './style.scss';

import {ReactComponent as GitHub} from '../../assets/github.svg';


export const Team = () => {
  return (
    <section className="team">
      <div className="team__wrapper">
        <h2 className="attribute__title">Команда</h2>
        <p className="attribute__subtitle">Наша команда работала над проектом для всех вас</p>

        <div className="team__cards">
          <div className="team__card">
            <div className="team__card-img">
              <GitHub />
            </div>
            <h4 className="team__card-title">skyress9 (разаботчик)</h4>
            <p className="team__card-text">Настроил бекенд всего проекта. Создал учебник и работу со словами.</p>
          </div>

          <div className="team__card">
            <div className="team__card-img">
              <GitHub />
            </div>
            <h4 className="team__card-title">chromari (разаботчик)</h4>
            <p className="team__card-text">Реализовала авторизация и регистрацию. Сверстала главную страницу.</p>
          </div>

          <div className="team__card">
            <div className="team__card-img">
              <GitHub />
            </div>
            <h4 className="team__card-title">tchigi (разаботчик)</h4>
            <p className="team__card-text">Реализвоал игру аудиовызов в соотствие предложенного дизайна. Реализовал игру спринт.</p>
          </div>


        </div>
      </div>
    </section>
  )
};
