import CoinsList from './CoinsList/CoinsList';
import s from './SendChoice.module.scss'


function SendChoise () {
    return (
        <div className={s.sendChoise}>
            <CoinsList/>
        </div>
    )
}  

export default SendChoise;