import React, {Fragment, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUser, toggleTypeModal} from "../../redux/slices/userSlice";

const minLengthPassword = 7;

const SignIn = () => {
  const [userData, setUserData] = useState({email: '', password: '',});
  const [errorInput, setErrorInput] = useState({email: false, password: false});
  const dispatch = useDispatch();
  const modalState = useSelector((state: any) => state.user);

  const handleChange = (value: string, type: string) => {
    if (type === 'email') {
      setUserData({...userData, email: value});
    } else if (type === 'password') {
      setUserData({...userData, password: value});
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const emailError = !userData.email;
    const passwordError = (!userData.password || (userData.password.length < minLengthPassword));

    if (!emailError && !passwordError) {
      dispatch(fetchSignUser(userData));
    }

    setErrorInput({email: emailError, password: passwordError});
  };

  const handleClick = () => {
    dispatch(toggleTypeModal({type: 'signUp'}));
  }

  return (
    <Fragment>
      <h2 className="modal__title">Авторизация пользователя</h2>
      <form className="modal__form">
        <input className="modal__input"
               type="email"
               placeholder="Электронная почта"
               value={userData.email}
               onChange={(event) => {
                 const {value} = event.target;
                 handleChange(value, 'email');
               }}/>

        {
          errorInput.email && <p className="modal__error-input">Укажите вашу почту.</p>
        }

        <input className="modal__input"
               type="password"
               placeholder="Пароль"
               value={userData.password}
               onChange={(event) => {
                 const {value} = event.target;
                 handleChange(value, 'password');
               }}/>

        {
          errorInput.password && <p className="modal__error-input">Укажите ваш пароль.</p>
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
    </Fragment>
  )
};

export {SignIn};
