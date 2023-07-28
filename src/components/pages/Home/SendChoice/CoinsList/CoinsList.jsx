import { useSelector } from 'react-redux';
import Coin from './Coin/Coin';
import s from './CoinsList.module.scss'

function CoinsList() {
    const coinsList = useSelector((state) => state.coinsList.coinsList)
    const renderedCoins = coinsList.map(coin => {
        return (
            <Coin 
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

export default CoinsList;