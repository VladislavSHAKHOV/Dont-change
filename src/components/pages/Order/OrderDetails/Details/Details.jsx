import s from "./Details.module.scss";

function Details() {
  const currentSendCoinArr = JSON.parse(
    localStorage.getItem("currentSendCoin")
  );
  const currentReceiveCoinArr = JSON.parse(
    localStorage.getItem("currentReceiveCoin")
  );
  const user = JSON.parse(
    localStorage.getItem("user")
  );
  const receiveValue = Number(localStorage.getItem("receiveAmount")).toFixed(6);
  const sendValue = Number(localStorage.getItem("sendAmount")).toFixed(6);
  const exchangeRate = (Number(currentSendCoinArr?.priceUsd) / Number(currentReceiveCoinArr?.priceUsd)).toFixed(6)

  return (
    <div className={s.details}>
      <div className={s.detail}>
        <div className={s.detailType}>Receive</div>
        <div className={s.detailValue}>
          <img
            className={s.coinIcon}
            src={process.env.PUBLIC_URL + currentReceiveCoinArr?.url}
            alt={process.env.PUBLIC_URL + currentReceiveCoinArr?.symbol}
          />
          <div className={s.coinName}>
            {receiveValue} {currentReceiveCoinArr?.symbol}
          </div>
        </div>
      </div>
      <div className={s.detail}>
        <div className={s.detailType}>Send</div>
        <div className={s.detailValue}>
          <img
            className={s.coinIcon}
            src={process.env.PUBLIC_URL + currentSendCoinArr?.url}
            alt={process.env.PUBLIC_URL + currentSendCoinArr?.symbol}
          />
          <div className={s.coinName}>
            {sendValue} {currentSendCoinArr?.symbol}
          </div>
        </div>
      </div>
      <div className={s.detail}>
        <div className={s.detailType}>E-mail</div>
        <div className={s.detailValue}>{user.emailAdress}</div>
      </div>
      <div className={s.detail}>
        <div className={s.detailType}>Wallet address</div>
        <div className={s.detailValue}>{user.walletAdress}</div>
      </div>
      <div className={s.detail}>
        <div className={s.detailType}>Exchange rate</div>
        <div className={s.detailValue}>1 {currentSendCoinArr?.symbol} = {exchangeRate} {currentReceiveCoinArr?.symbol}</div>
      </div>
      <div className={s.attention}>Don`t exchange here nothing!</div>
      <div className={s.attention}>Don`t exchange here nothing!</div>
    </div>
  );
}

export default Details;
