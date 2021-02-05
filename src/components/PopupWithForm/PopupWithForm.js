function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''} popup_type-${props.name}`}>
            <form
                className="popup__container popup__container_edit-form"
                name={`${props.name}`}
                method="POST"
                noValidate>
                <h3 className="popup__edit-profile">{`${props.title}`}</h3>
                {props.children}
                <button
                    className="popup__button-save"
                    type="submit">Сохранить</button>
                <button
                    className="popup__button-close"
                    type="button"
                    onClick={props.onClose}></button>
            </form>
        </div>
    )
}

export default PopupWithForm;