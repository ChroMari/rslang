import {useState} from "react";

const SignIn = () => {
  const [userData, setUserData] = useState({email: '', password: '',});

  const handleChange = (value: string, type: string) => {
    if (type === 'email') {
      const email = value;
      setUserData({...userData, email});
    } else if (type === 'password') {
      const password = value;
      setUserData({...userData, password});
    }
  };

  const handleSubmit = () => {
    // dispatch userData
  };

  const handleClick = () => {
    // dispatch update
  }

  return (
    <div>
      <h2 className="modal__title">Авторизация пользователя</h2>
      <form className="modal__form">
        <input className="modal__input"
               type="email"
               placeholder="Электронная почта"
               value={userData.email}
               onChange={(event) => handleChange(event.target.value, 'email')}/>

        <input className="modal__input"
               type="text"
               placeholder="Пароль"
               value={userData.password}
               onChange={(event) => handleChange(event.target.value, 'password')}/>

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
