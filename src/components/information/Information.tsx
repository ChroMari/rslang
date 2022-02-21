import './informationStyle.scss';

import img from '../../assets/information.png';

const Information = () => {
  return (
    <section className="information">
      <div className="information__wrapper">
        <div className="information__content">
          <h2 className="information__title">Английский язык <br/> играючи</h2>
          <p className="information__text">Увлекательное приложение для изучения английского. Увлекательные игры для
            тренировки слов и статистика вашего успеха освония языка</p>
        </div>
        <img className="information__image" src={img} alt="information"/>
      </div>
    </section>
  )
};

export {Information};
