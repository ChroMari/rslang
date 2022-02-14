import {useState} from "react";

const pages = [{
  title: 'Главная',
  keyTitle: 'home',
},
  {
    title: 'Учебник',
    keyTitle: 'book',
  },
  {
    title: 'Статистика',
    keyTitle: 'static',
  }];

const Menu = () => {
  const [activePage, setActivePage] = useState('home');

  return (
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
  )
};

export {Menu};
