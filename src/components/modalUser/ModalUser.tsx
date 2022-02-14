import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Close} from '../../assets/close.svg';

import {toggleCloseModal} from "../../redux/slices/userSlice";

import {SignUp} from "./signUser/SignUp";
import {SignIn} from "./signUser/SignIn";

import BounceLoader from "react-spinners/BounceLoader";

import './modalStyle.scss';

const ModalUser = () => {
  const stateModal = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCloseModal());
  };

  return (
    <div className={"overlay " + (stateModal.openModal ? 'overlay_active' : '')}>

      <BounceLoader loading={stateModal.loading} size={100} />

      <div className="modal">
        <button className="modal__close" onClick={handleClick}>
          <Close />
        </button>

        {
          (stateModal.typeModal === 'signIn') ? <SignIn /> : <SignUp />
        }

      </div>
    </div>
  )
};

export {ModalUser};
