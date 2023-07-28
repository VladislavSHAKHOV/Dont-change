import s from './ReceiveChoice.module.scss'
import ReceiveCoinsList from './ReceiveCoinsList/ReceiveCoinsList';


function ReceiveChoise () {
    return (
        <div className={s.receiveChoise}>
            <ReceiveCoinsList/>
        </div>
    )
}  

export default ReceiveChoise;