import s from './Blog.module.scss'


function Blog(props) {
    return (
        <div className={s.blog}>
            <div className={s.title}>DONT CHANGE blog!</div>
            <div className={s.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, aliquam id ipsam omnis quos. Veritatis ipsam ipsum quas eligendi similique placeat sunt laudantium modi! Fuga et omnis veniam vitae.</div>
            <div className={s.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, aliquam id ipsam omnis quos. Veritatis ipsam ipsum quas</div>
            <div className={s.descriptionItem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, eum omnis excepturi qui vero ut obcaecati quisquam.</div>
            <div className={s.descriptionItem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, eum omnis excepturi qui vero ut obcaecati quisquam.</div>
            <div className={s.descriptionItem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, eum omnis excepturi qui vero ut obcaecati quisquam.</div>
            <div className={s.descriptionItem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, eum omnis excepturi qui vero ut obcaecati quisquam.</div>
            <div className={s.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, aliquam id ipsam omnis quos. Veritatis ipsam ipsum quas</div>
            <div className={s.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, aliquam id ipsam omnis quos. Veritatis ipsam ipsum quas</div>
            <div className={s.description}>Sincerely, your future employee!</div>
        </div>
    )
}

export default Blog;