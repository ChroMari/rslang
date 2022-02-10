import {SignIn} from "./SignIn";

import './modalStyle.scss'

const ModalUser = () => {
  const handleClick = () => false;

  return (
    <div className={"overlay " + (true ? 'overlay_active' : '')}>
      <div className="modal">
        <button className="modal__close" onClick={handleClick}>x</button>

        <SignIn />
        {/*{*/}
        {/*  stateModal.registrationModal && <ModalSingUp/>*/}
        {/*}*/}
        {/*{*/}
        {/*  stateModal.authorizationModal && <ModalSingIn/>*/}
        {/*}*/}
      </div>
    </div>
  )
};

export {ModalUser};
