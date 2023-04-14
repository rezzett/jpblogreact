import css from "./ErrorPage.module.css"

export const ErrorPage = () => {
    return (
        <div className={css.error__container}>
            <h4 className={css.error__title}>Page not found</h4>
            <p className={css.error__content}>404</p>
        </div>
    )
}