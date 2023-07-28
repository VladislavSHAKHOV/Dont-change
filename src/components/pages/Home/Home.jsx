import Attention from './Attention/Attention';
import s from './Home.module.scss'
import ReceiveChoise from './ReceiveChoice/ReceiveChoice';
import SendChoise from './SendChoice/SendChoice';
import UserInfo from './UserInfo/UserInfo';
import UserReceive from './UserReceive/UserReceive';
import UserSend from './UserSend/UserSend';

function Home() {
    
    return (
        <div className={s.home}>
            <div className={s.userOperations}>
                <div className={s.activeCoins}>
                    <UserSend/>
                    <UserReceive/>
                </div>
                <div className={s.choices}>
                    <SendChoise/>
                    <ReceiveChoise/>
                </div>
            </div>
            <div className={s.userInfo}>
                <UserInfo/>
                <Attention/>
            </div>
        </div>
    )
}

export default Home;