const ButtonOpenApp = ({openModal}: {openModal: () => void}) => {
  return (
    <button className="header__button" onClick={openModal}>Войти</button>
  )
};

export {ButtonOpenApp};
