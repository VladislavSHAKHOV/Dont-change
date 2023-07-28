import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { setisMinAmountToBeExchanged } from "../../../../store/Slises/coinsSlice";
import { setOrderID, setUser } from "../../../../store/Slises/orderSlice";
import s from "./UserInfo.module.scss";
import { startTimer } from "../../Order/OrderDetails/Timer/Timer";

const initialValues = {
  walletAdress: "",
  emailAdress: "",
};

function UserInfo() {
  const dispatch = useDispatch();
  const isItMinAmount = useSelector((state) => state.coinsList.isMinAmountToBeExchanged);
  const currentCoinArr = useSelector((state) => state.coinsList.currentSendCoin);

  const validationSchema = Yup.object({
    walletAdress: Yup.string()
      .required("Wallet Address is empty")
      .matches(/^[A-Za-z0-9]+$/, "Enter Valid Wallet Address")
      .min(5, "Enter Valid Wallet Address"),
    emailAdress: Yup.string()
      .required("Email Address is empty")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Enter Valid Email Address"
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (e) => {
      dispatch(setisMinAmountToBeExchanged());
    },
    validationSchema,
  });

  const handleClick = () => {
    dispatch(setUser(formik.values));
    dispatch(setisMinAmountToBeExchanged());
    dispatch(setOrderID());
    localStorage.removeItem("timer_remaining_time");
    startTimer();
  };

  return (
    <div className={s.userInfo}>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.details}>Exchange details</div>
        <div className={s.formInputWrapper}>
          <input
            className={s.formInput}
            type="text"
            id="walletAdress"
            name="walletAdress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.walletAdress}
          />
          {formik.touched.walletAdress && formik.errors.walletAdress && (
            <div className={s.formError}>{formik.errors.walletAdress}</div>
          )}
        </div>
        <div className={s.formInputWrapper}>
          <input
            className={s.formInput}
            type="text"
            id="emailAdress"
            name="emailAdress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailAdress}
          />
          {formik.touched.emailAdress && formik.errors.emailAdress && (
            <div className={s.formError}>{formik.errors.emailAdress}</div>
          )}
        </div>
        <div className={s.attention}>
          It's just a project for my Portfolio! Don't exchange anything here!
        </div>
        {formik.errors.walletAdress ||
        formik.errors.emailAdress ||
        !formik.values.emailAdress ||
        !currentCoinArr[0].amount ||
        !isItMinAmount ||
        !formik.values.walletAdress ? (
          <button
            type="submit"
            className={s.formButton}
            disabled={formik.isSubmitting}
            onClick={handleClick}
          >
            Exchange
          </button>
        ) : (
          <Link to="/order" onClick={handleClick} className={s.formButton}>
            Exchange
          </Link>
        )}
      </form>
    </div>
  );
}

export default UserInfo;

