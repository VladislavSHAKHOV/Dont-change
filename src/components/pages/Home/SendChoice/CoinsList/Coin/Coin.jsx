import { useDispatch } from 'react-redux';
import { setClearAmount, setExchangeRate, setMinAmount, setUserSendCurrentCoin } from '../../../../../../store/Slises/coinsSlice';
import s from './Coin.module.scss'

function Coin({url, fullName, shortName, price, coin}) {
    const dispatch = useDispatch();

    const handlePrice = () => {
        dispatch(setUserSendCurrentCoin(coin))
        dispatch(setExchangeRate())
        dispatch(setClearAmount())
        dispatch(setMinAmount(coin))
        console.log(coin);
    }
    return (
        <div onClick={handlePrice} className={s.coin}>
            <div className={s.main}>
                <img className={s.coinIcon} src={process.env.PUBLIC_URL + url} alt={fullName} />
                <div className={s.fullName}>{fullName}</div>
            </div>
            <div className={s.shortName}>{shortName}</div>
        </div>
    )
}

export default Coin;