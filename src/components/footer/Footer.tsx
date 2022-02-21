import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as GitHub} from '../../assets/github.svg';

import rsImg from '../../assets/rs school.png';

import './style.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <Logo />
          <span className="footer__logo-text">2022</span>
        </div>
        <div className="footer__inner">
          <div className="footer__card">
            <GitHub />
            <p>tchigi</p>
          </div>

          <div className="footer__card">
            <GitHub />
            <p>chromari</p>
          </div>

          <div className="footer__card">
            <GitHub />
            <p>skyress9</p>
          </div>
        </div>

        <img src={rsImg} alt=""/>
      </div>
    </footer>
  )
};
