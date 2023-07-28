import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png'
import s from './Header.module.scss'

function Header(props) {
    return (
        <div className={s.header}>
            <div className={s.headerNav}>
            <Link className={s.logoLink} to='/'>
                <img className={s.logoImage} src={logo} alt="dont-change-logo" />
                <div className={s.logoNamed}>DONT CHANGE</div>
            </Link>
            <ul className={s.navLinks}>
            <Link to='/'><div className={s.navLink}>HOME</div></Link>
            <Link to='blog'><div className={s.navLink}>BLOG</div></Link>
            <Link to='regulations'><div className={s.navLink}>REGULATIONS</div></Link>
            <Link to='contacts'><div className={s.navLink}>CONTACTS</div></Link>
            </ul>
            </div>
        </div>
    )
}

export default Header;