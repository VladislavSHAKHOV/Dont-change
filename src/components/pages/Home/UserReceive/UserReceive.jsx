import s from "./UserReceive.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { setAmountForReceiveCoin } from "../../../../store/Slises/coinsSlice";

function UserReceive(props) {
  const dispatch = useDispatch()
  const currentCoinArr = useSelector((state) => state.coinsList.currentReceiveCoin);
  const currentCoin = currentCoinArr.length > 0 ? currentCoinArr[0] : "loading...";

  useEffect(() => {
  }, [currentCoin]);

  const handleSendCoinAmount = (e) => {
    dispatch(setAmountForReceiveCoin(e.target.value))
  }


  return (
    <div className={s.userSend}>
      <div className={s.sendTitle}>
        <div className={s.titleText}>
          <div className={s.send}>Receive</div>
          <div className={s.nameOfSendedCoin}>{currentCoin?.name}</div>
        </div>
        <img className={s.sendCoinIcon} src={process.env.PUBLIC_URL + currentCoin?.url} alt="coin icon" />
      </div>
      <input value={currentCoin?.amount || ""} onChange={handleSendCoinAmount} className={s.sendInput} type="number" />
      <div className={s.coinsAmount}>Amount: 40000 {currentCoin?.symbol}</div>
    </div>
  );
}

export default UserReceive;

