import {ReactComponent as Logo} from '../../assets/logo.svg';

import './headerStyle.scss';
import {useDispatch, useSelector} from "react-redux";
import {closeUser, toggleOpenModal, toggleTypeModal} from "../../redux/slices/userSlice";
import {Menu} from "./menuHeader/Menu";
import {ButtonOpenApp} from './buttonsHeader/ButtonOpenApp';
import {ButtonCloseApp} from "./buttonsHeader/ButtonCloseApp";


const Header = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.user);

  const handleClickOpen = () => {
    dispatch(toggleOpenModal());
    dispatch(toggleTypeModal({type: 'signIn'}));
  };

  const handleClickClose = () => {
    dispatch(closeUser());
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo/>

        <Menu/>

        {
          (!userState.userToken) ?
            <ButtonOpenApp openModal={handleClickOpen}/> :
            <ButtonCloseApp userName={userState.userName} closeUser={handleClickClose}/>
        }

      </div>
    </header>
  )
};

export {Header};
