import { useSelector } from 'react-redux';
import ReceiveCoin from './ReceiveCoin';
import s from './ReceiveCoinsList.module.scss'


function ReceiveCoinsList() {
    const coinsList = useSelector((state) => state.coinsList.coinsList)
    const renderedCoins = coinsList.map(coin => {
        return (
            <ReceiveCoin 
            key={coin.id}
            url={coin.url}
            shortName={coin.symbol}
            fullName={coin.name}
            price={coin.priceUsd}
            coin={coin}
            />
        )
    })
    return (
        <div className={s.coinsList}>
            {renderedCoins}
        </div>
    )
}

export default ReceiveCoinsList;