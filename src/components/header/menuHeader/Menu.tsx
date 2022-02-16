import {NavLink} from "react-router-dom";

const pages = [{
  title: 'Главная',
  keyTitle: '/',
},
  {
    title: 'Учебник',
    keyTitle: '/book',
  },
  {
    title: 'Статистика',
    keyTitle: '/static',
  }];

const activeLink = {
  borderColor: '#ffffff',
};


const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        {
          pages.map((page, index) => {
            return (
                <NavLink key={index}
                         style={({isActive}) => isActive ? activeLink : {}}
                         className='menu__item'
                         to={page.keyTitle}>{page.title}
                </NavLink>
            )
          })
        }
      </ul>
    </nav>
  )
};

export {Menu};
