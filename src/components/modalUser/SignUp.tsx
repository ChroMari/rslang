import {useDispatch, useSelector} from "react-redux";
import {fetchCreateUser, toggleTypeModal} from "../../redux/slices/userSlice";
import React, {useState} from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: any) => state.user);

  const [userData, setUserData] = useState({name: '', email: '', password: '',});
  const [errorInput, setErrorInput] = useState({name: false, email: false, password: false});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nameError = !userData.name || (userData.name.length > 16);
    const emailError = !userData.email;
    const passwordError = (!userData.password || (userData.password.length < 7));

    if (!nameError && !emailError && !passwordError) {
      dispatch(fetchCreateUser(userData));
    }

    setErrorInput({name: nameError, email: emailError, password: passwordError});
  };

  const handleClick = () => {
    dispatch(toggleTypeModal({type: 'signIn'}));
  }

  const handleChangeInput = (value: string, type: string) => {
    if (type === 'name') {
      setUserData({...userData, name: value});
    } else if (type === 'email') {
      setUserData({...userData, email: value});
    } else if (type === 'password') {
      setUserData({...userData, password: value});
    }
  }


  return (
    <div>
      <h2 className="modal__title">Регистрация пользователя</h2>
      <form className="modal__form">
        <input className="modal__input"
               type="text"
               placeholder="Имя"
               value={userData.name}
               onChange={(event) => {
                 handleChangeInput(event.target.value, 'name');
               }}
        />

        {
          errorInput.name && <p className="modal__error-input">Укажите логин с длиной не больше 15 символов.</p>
        }

        <input className="modal__input"
               type="email"
               placeholder="Электронная почта"
               value={userData.email}
               onChange={(event) => {
                 handleChangeInput(event.target.value, 'email');
               }}
        />

        {
          errorInput.email && <p className="modal__error-input">Укажите свою почту.</p>
        }

        <input className="modal__input"
               type="password"
               placeholder="Пароль"
               value={userData.password}
               onChange={(event) => {
                 handleChangeInput(event.target.value, 'password');
               }}
        />

        {
          errorInput.password && <p className="modal__error-input">Укажите пароль больше 8 символов.</p>
        }

        {
          modalState.error && <p className="modal__error">Неверно заполненные данные.</p>
        }

        <button className="modal__button"
                onClick={handleSubmit}
                type="submit">создать аккаунт
        </button>

      </form>

      <button className="modal__button-switch" onClick={handleClick}>Авторизация</button>
    </div>
  )
};

export {SignUp};
