import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import visaLogo from '../../assets/images/visa.png';
import masterCardLogo from '../../assets/images/mastercard.png';
import s from "./Footer.module.scss";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.mainInfo}>
          <div className={s.logoPart}>
            <img src={logo} alt="don`t change logo" className={s.logo} />
            <div className={s.logoName}>DONT CHANGE</div>
          </div>
          <div className={s.info}>Electronic crypto-asset exchange service</div>
          <div className={s.info}>Dont change 2023 copyright</div>
          <div className={s.info}>All rights reserved © (i hope)</div>
        </div>
        <div className={s.links}>
            <Link to="regulations"><div className={s.footerLink}>Terms of service</div> </Link>
            <Link to="contacts"><div className={s.footerLink}>Contacts</div> </Link>
        </div>
        <div className={s.support}>
            <div>Support:</div>
            <div>here can be your mail</div>
        </div>
        <div className={s.cardsSwift}>
            <img src={visaLogo} alt="visa logo" className={s.visa} />
            <img src={masterCardLogo} alt="mastercard logo" className={s.masterCard} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
