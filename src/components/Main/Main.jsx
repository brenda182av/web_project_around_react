import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import avatar from "../../images/image.jpg";
import editButton from "../../images/Edit Button.png";
import plusIcon from "../../images/plus.png";

import Card from "./components/Card/Card.jsx";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/form/NewCard/NewCard.jsx";
import EditProfile from "./components/form/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/form/EditAvatar/EditAvatar.jsx";
import RemoveCard from "./components/form/RemoveCard/RemoveCard.jsx";

function Main({ cards, onCardLike, onCardDelete, onAddPlaceSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Abrir ventanas emergentes
  function handleOpenPopup(selectedPopup) {
    setPopup(selectedPopup);
  }

  // Cerrar ventanas emergentes
  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
  }

  // Seleccionar una tarjeta para eliminar
  function handleCardDelete(card) {
    setSelectedCard(card);
    setPopup({
      title: "¿Estás seguro?",
      type: "remove-card",
    });
  }

  // Confirmar la eliminación
  function handleConfirmDelete() {
    if (!selectedCard || isDeleting) return;

    setIsDeleting(true);

    onCardDelete(selectedCard)
      .then(() => {
        handleClosePopup();
      })
      .catch((err) => {
        console.error("Error al eliminar la tarjeta:", err);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  }

  // Crear una tarjeta y cerrar el popup al guardar
  function handleAddPlaceSubmit({ name, link }) {
    return onAddPlaceSubmit({ name, link }).then((newCard) => {
      handleClosePopup();
      return newCard;
    });
  }

  // Configuración de las ventanas emergentes
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile onClose={handleClosePopup} />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onClose={handleClosePopup} />,
  };

  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__avatar-container"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={currentUser.avatar || avatar}
            alt="Foto de perfil"
            className="profile__image"
          />

          <div className="profile__avatar-overlay">
            <img src={editButton} alt="" className="profile__avatar-pencil" />
          </div>
        </div>

        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>

            <img
              src={editButton}
              alt="Editar perfil"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>

          <p className="profile__about">{currentUser.about}</p>
        </div>

        <button
          className="profile__more-button"
          type="button"
          aria-label="Agregar una nueva tarjeta"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img src={plusIcon} alt="" className="profile__more-button-plus" />
        </button>
      </section>

      <section className="elements page__section">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopup}
            handleDeleteClick={() => handleCardDelete(card)}
            onCardLike={onCardLike}
          />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.type === "remove-card" ? (
            <RemoveCard onConfirm={handleConfirmDelete} />
          ) : (
            popup.children
          )}
        </Popup>
      )}
    </main>
  );
}

export default Main;
