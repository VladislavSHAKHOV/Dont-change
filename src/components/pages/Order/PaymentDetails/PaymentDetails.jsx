import s from "./PaymentDetails.module.scss";

function PaymentDetails() {
  const currentSendCoinArr = JSON.parse(
    localStorage.getItem("currentSendCoin")
  );
  const sendValue = Number(localStorage.getItem("sendAmount")).toFixed(6);

  return (
    <div className={s.paymentDetails}>
      <div className={s.title}>Payment of application</div>
      <div className={s.payment}>
        <div className={s.amount}>
          <div className={s.amountTitle}>Amount</div>
          <div className={s.amountValue}>
            <div>{sendValue}</div>
            <div>{currentSendCoinArr?.symbol}</div>
          </div>
        </div>
        <div className={s.walletAdress}>
            <div className={s.adressTitle}>To the adress</div>
            <div className={s.adress}>Here can be your {currentSendCoinArr?.symbol} adress!</div>
        </div>
      </div>
      <div className={s.attention}>Don`t exchange here nothing! It`s just a project to my portfolio!</div>
      <div className={s.attention}>Don`t exchange here nothing! It`s just a project to my portfolio!</div>
      <div className={s.attention}>Don`t exchange here nothing! It`s just a project to my portfolio!</div>
      <div className={s.attention}>Don`t exchange here nothing! It`s just a project to my portfolio!</div>
    </div>
  );
}

export default PaymentDetails;
