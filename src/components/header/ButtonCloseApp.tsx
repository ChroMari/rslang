const ButtonCloseApp = ({userName, closeUser}: { userName: string, closeUser: () => void }) => {
  return (
    <div>
      <p className="header__name-user">{userName}</p>
      <button className="header__button" onClick={closeUser}>x</button>
    </div>
  )
};

export {ButtonCloseApp};
