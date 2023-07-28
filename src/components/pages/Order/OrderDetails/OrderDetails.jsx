import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserID } from "../../../../store/Slises/orderSlice";
import {
  getRemainingTime,
  restoreTimer,
} from "../../Order/OrderDetails/Timer/Timer";
import Details from "./Details/Details";
import LoadingAnimation from "./LoadingAnimation/LoadingAnimation";
import s from "./OrderDetails.module.scss";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function OrderDetails() {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.order.order.orderID);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    dispatch(setUserID());

    const restoreTimerAndSetLoading = async () => {
      await restoreTimer();
      setIsLoading(false);
      setCurrentTime(getRemainingTime() || 0);
    };

    restoreTimerAndSetLoading();
  }, []);

  const isTimerExpired = currentTime <= 0;

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const remainingTime = getRemainingTime();
      setCurrentTime(remainingTime || 0);

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        navigate("/");
        localStorage.removeItem("timer_remaining_time");
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [currentTime, navigate]);

  const memoizedDetails = useMemo(() => <Details />, [userID]);

  return (
    <div className={s.orderDetails}>
      <div className={s.header}>
        <div className={s.orderId}>Order #{userID}</div>
        <div className={s.timer}>
          {isLoading ? "Loading..." : formatTime(currentTime)}
        </div>
      </div>
      {isTimerExpired ? <LoadingAnimation/> : memoizedDetails}
    </div>
  );
}

export default OrderDetails;
