import css from './AppModal.module.css'

export default ({children, visible, setVisible}) => {
    const cssClasses = [css.modal];
    if(visible) cssClasses.push(css.active);
    return (
        <div className={cssClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={css.modal__content} onClick={e => e.stopPropagation()}>{children}</div>
        </div>
    );
};