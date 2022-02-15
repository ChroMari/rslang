import './style.scss';
import {useDispatch} from "react-redux";
import {toggleOpenModal, toggleTypeModal} from "../../redux/slices/userSlice";

export const Record = () => {
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(toggleOpenModal());
    dispatch(toggleTypeModal({type: 'signUp'}));
  };

  return (
    <section className="record">
      <div className="record__wrapper">
        <h2 className="attribute__title">Учитесь эффективно</h2>
        <button className="record__button" onClick={handleClickOpen}>Зарегистрироваться</button>
      </div>
    </section>
  )
};
