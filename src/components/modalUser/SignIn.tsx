import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUser, toggleTypeModal} from "../../redux/slices/userSlice";

const SignIn = () => {
  const [userData, setUserData] = useState({email: '', password: '',});
  const dispatch = useDispatch();
  const modalState = useSelector((state: any) => state.user);
  const [errorInput, setErrorInput] = useState({email: false, password: false});

  const handleChange = (value: string, type: string) => {
    if (type === 'email') setUserData({...userData, email: value});
    else if (type === 'password') setUserData({...userData, password: value});
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (userData.email && userData.password && userData.password.length > 8) {
      // @ts-ignore
      dispatch(fetchSignUser(userData));
      setErrorInput({email: false, password: false});
    }

    else {
      if (!userData.email) setErrorInput({...errorInput, email: true});
      if (!userData.password || userData.password && userData.password.length < 8) {
        setErrorInput({...errorInput, password: true});
      }
    }
  };

  const handleClick = () => {
    dispatch(toggleTypeModal({type: 'signUp'}));
  }

  return (
    <div>
      <h2 className="modal__title">Авторизация пользователя</h2>
      <form className="modal__form">
        <input className="modal__input"
               type="email"
               placeholder="Электронная почта"
               value={userData.email}
               onChange={(event) => {
                 handleChange(event.target.value, 'email');
               }}/>

        {
          errorInput.email && <p className="modal__error">Укажите вашу почту.</p>
        }

        <input className="modal__input"
               type="password"
               placeholder="Пароль"
               value={userData.password}
               onChange={(event) => {
                 handleChange(event.target.value, 'password');
               }}/>

        {
          errorInput.password && <p className="modal__error">Укажите пароль больше 8 символов.</p>
        }

        {
          modalState.error && <p className="modal__error">Неверный логин или пароль.</p>
        }

        <button className="modal__button"
                onClick={handleSubmit}
                type="submit">Войти</button>
      </form>

      <button className="modal__button-switch"
              onClick={handleClick}>Зарегистрироваться</button>
    </div>
  )
};

export {SignIn};
