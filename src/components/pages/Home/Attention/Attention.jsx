import s from './Attention.module.scss'

function Attention() {
    return (
        <div className={s.attention}>
            <ul className={s.attentionList}>
                <li className={s.attentionItem}>Don`t exchange here  nothing!</li>
                <li className={s.attentionItem}>Don`t exchange here  nothing!</li>
                <li className={s.attentionItem}>Don`t exchange here  nothing!</li>
            </ul>
        </div>
    )
}

export default Attention