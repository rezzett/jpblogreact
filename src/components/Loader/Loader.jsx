import css from './Loader.module.css'
export default () => {
    return (
        <div className={css.loader} >
            <div className={css.spinner}></div>
        </div>
    )
}