import {ReactComponent as Exit} from '../../../assets/exit.svg';

const ButtonCloseApp = ({userName, closeUser}: { userName: string, closeUser: () => void }) => {
  return (
    <div className="header__wrapper-user">
      <p className="header__name-user">{userName}</p>
      <button className="header__button-close" onClick={closeUser}>
        <Exit />
      </button>
    </div>
  )
};

export {ButtonCloseApp};
