function Card(props) {

    function handleCardClick() {
        props.onCardClick({
            name: props.card.name,
            link: props.card.link,
        })
    }

    return (
        <article className="element">
            <img className="element__photo" 
            src={props.card.link} 
            alt={props.card.name} 
            onClick={handleCardClick} />
            <button className="element__delete"
                type="button"
                aria-label="удалить">
            </button>
            <div className="element__container">
                <h2 className="element__place-name">{props.card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like"
                        type="button"
                        aria-label="лайк">
                    </button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;