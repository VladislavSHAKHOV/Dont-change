import { useDispatch } from 'react-redux';
import { setClearAmount, setExchangeRate, setUserReceiveCurrentCoin } from '../../../../../store/Slises/coinsSlice';
import s from './ReceiveCoin.module.scss'

function ReceiveCoin({url, fullName, shortName, price, coin}) {
    const dispatch = useDispatch();

    const handlePrice = () => {
        dispatch(setUserReceiveCurrentCoin(coin))
        console.log(coin);
        dispatch(setExchangeRate())
        dispatch(setClearAmount())
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

export default ReceiveCoin;