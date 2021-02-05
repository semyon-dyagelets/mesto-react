import React from 'react';
import profileAvatar from '../../images/photo-kusto.jpg';
import api from '../../utils/api.js';
import Card from '../Card/Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState("FFF");
    const [userDescription, setUserDescription] = React.useState("255, 255, 255")
    const [userAvatar, setUserAvatar] = React.useState({ profileAvatar });
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
            })
            .catch((err) => {
                console.log(err)
            });
    });

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <div className="page">
            <main>
                <section className="profile">
                    <div className="profile__container">
                        <div className="profile__avatar-container">
                            <img className="profile__avatar" src={userAvatar} alt="аватар" />
                            <button
                                className="profile__edit-button profile__edit-avatar-button"
                                type="button"
                                aria-label="редактировать-аватар"
                                onClick={props.onEditProfile}></button>
                        </div>
                        <div className="profile__info">
                            <div className="profile__description">
                                <h1 className="profile__name">{userName}</h1>
                                <p className="profile__profession">{userDescription}</p>
                            </div>
                            <button className="profile__edit-button profile__edit-description-button"
                                type="button"
                                aria-label="редактировать-профиль"
                                onClick={props.onEditProfile}>
                            </button>
                        </div>
                    </div>
                    <button className="profile__add-button"
                        type="button"
                        aria-label="добавить-фото"
                        onClick={props.onAddPlace}>
                    </button>
                </section>

                <section className="elements" aria-label="Фотографии">
                    {cards.map((card) => <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick} />)}
                </section>

            </main>
        </div>
    )
}

export default Main;