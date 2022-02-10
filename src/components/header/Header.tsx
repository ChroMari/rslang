import {ReactComponent as Logo} from '../../assets/logo.svg';

import './headerStyle.scss';
import {useState} from "react";

const pages = [{
  title: 'Главная',
  keyTitle: 'home',
},
  {
    title: 'учебник',
    keyTitle: 'book',
  },
  {
    title: 'статистика',
    keyTitle: 'static',
  }]

const Header = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo/>

        <nav>
          <ul className="menu">
            {
              pages.map((page, index) => {
                return (
                  <li key={index}
                      className={'menu__item ' + (activePage === page.keyTitle && 'menu__item_active')}
                      onClick={() => setActivePage(page.keyTitle)}> {page.title}
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <button className="header__button">Войти</button>


        {
          // !userActive.userToken ?  <button className="header__button" onClick={handleClick}>Войти</button> :
          <div>
            {/*<p>{userActive.userNameame}</p>*/}
            {/*<button onClick={() => dispatch(exitUser())}>x</button>*/}
          </div>
        }

        {/*<button className="header__button" onClick={handleClick}>Войти</button>*/}

        {/*<div>*/}
        {/*  <p>suer_name</p>*/}
        {/*  <button>x</button>*/}
        {/*</div>*/}

      </div>
    </header>
  )
};

export {Header};
