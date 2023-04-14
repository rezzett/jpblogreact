import css from './AppButton.module.css'

export default (props) => {
    return (
        <div>
            <button {...props} className={css.btn}>{props.children}</button>
        </div>
    );
};