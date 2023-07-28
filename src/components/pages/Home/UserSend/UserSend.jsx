import s from "./UserSend.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { setAmountForSendCoin, setisMinAmountToBeExchanged } from "../../../../store/Slises/coinsSlice";

function UserSend() {
  const dispatch = useDispatch()
  const currentCoinArr = useSelector((state) => state.coinsList.currentSendCoin);
  const currentReceiveCoinArr = useSelector((state) => state.coinsList.currentReceiveCoin);
  const exchangeRate =  useSelector((state) => state.coinsList.exchangeRate);
  const currentCoin = currentCoinArr.length > 0 ? currentCoinArr[0] : "loading...";
  const currentReceiveCoin = currentReceiveCoinArr.length > 0 ? currentReceiveCoinArr[0] : "loading...";
  const isItMinAmount = useSelector((state) => state.coinsList.isMinAmountToBeExchanged)
  const minAmount = useSelector((state) => state.coinsList.minAmount)

  useEffect(() => {
   console.log(currentCoin);
  }, [currentCoin, isItMinAmount]);



  const handleSendCoinAmount = (e) => {
    dispatch(setAmountForSendCoin(e.target.value))
    dispatch(setisMinAmountToBeExchanged())
  }
  console.log(isItMinAmount);

  const priceUsdLimited = typeof(exchangeRate) === "number" ? Number(exchangeRate).toFixed(6) : "loading...";

  return (
    <div className={s.userSend}>
      <div className={s.sendTitle}>
        <div className={s.titleText}>
          <div className={s.send}>Send</div>
          <div className={s.nameOfSendedCoin}>{currentCoin?.name}</div>
        </div>
        <img className={s.sendCoinIcon} src={process.env.PUBLIC_URL + currentCoin?.url} alt="coin icon" />
      </div>
      {!isItMinAmount ? <div className={s.minAmountError}>Min Amount to be exchanged is {minAmount} {currentCoin?.symbol}</div> : null}
      <input value={currentCoin?.amount || ""} onChange={handleSendCoinAmount} className={s.sendInput} type="number" />
      <div className={s.exchangeRate}>exchange rate 1 {currentCoin?.symbol} = {priceUsdLimited} {currentReceiveCoin?.symbol}</div>
    </div>
  );
}

export default UserSend;

