import s from './Order.module.scss'
import OrderDetails from './OrderDetails/OrderDetails';
import PaymentDetails from './PaymentDetails/PaymentDetails';

function Order() {
    return (
        <div className={s.order}>
            <OrderDetails/>
            <PaymentDetails/>
        </div>
    )
}

export default Order;