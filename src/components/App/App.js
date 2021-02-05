import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input 
          className="popup__input popup__input_edit_name" 
          id="name-input" 
          name="name" 
          type="text" 
          minLength="2" 
          maxLength="40" 
          required />
          <span className="popup__input-error" id="name-input-error"></span>
          <input 
          className="popup__input popup__input_edit_description" 
          id="description-input" 
          name="about" 
          type="text" 
          minLength="2" 
          maxLength="200" 
          required />
          <span className="popup__input-error" id="description-input-error"></span>
        </PopupWithForm>

        <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input 
          className="popup__input popup__input_edit_name" 
          id="avatar-link-input" 
          name="avatar" 
          type="url" 
          placeholder="Ссылка на картинку" 
          required />
          <span className="popup__input-error" id="avatar-link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input 
          className="popup__input popup__input_edit_name" 
          id="place-name-input" 
          name="name" 
          type="text"  
          minLength="2" 
          maxLength="30" 
          placeholder="Название" required />
          <span className="popup__input-error" id="place-name-input-error"></span>
          <input 
          className="popup__input popup__input_edit_description" 
          id="place-link-input" 
          name="link" 
          type="url" 
          placeholder="Ссылка на картинку" 
          required />
          <span className="popup__input-error" id="place-link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="confirm">
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;