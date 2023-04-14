import css from './AppInput.module.css'

export default (props) => {
    return (
            <input className={css.appInput} {...props} />
    );
};