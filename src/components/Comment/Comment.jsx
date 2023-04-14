import css from "./Comment.module.css"

export const Comment = ({email, name, body}) => {
    return (
        <div className={css.comment}>
            <p className={css.comment__email}>{email}</p>
            <h4 className={css.comment__name}>{name}</h4>
            <p className={css.comment__body}>{body}</p>
        </div>
    )
}