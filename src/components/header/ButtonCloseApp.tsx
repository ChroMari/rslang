const ButtonCloseApp = ({closeUser}: { closeUser: () => void }) => {
  return (
    <div>
      <p className="header__name-user">--</p>
      <button className="header__button" onClick={closeUser}>x</button>
    </div>
  )
};

export {ButtonCloseApp};
