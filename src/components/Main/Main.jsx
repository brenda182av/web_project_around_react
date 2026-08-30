import { useState } from "react";

import avatar from "../../images/image.jpg";
import editButton from "../../images/Edit Button.png";
import plusIcon from "../../images/plus.png";
import Card from "./components/Card/Card.jsx";

import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/form/NewCard/NewCard.jsx";
import EditProfile from "./components/form/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/form/EditAvatar/EditAvatar.jsx";
import RemoveCard from "./components/form/RemoveCard/RemoveCard.jsx";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];
function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  const removeCardPopup = {
    title: "¿Estás seguro?",
    children: <RemoveCard />,
  };

  function handleOpenPopup(selectedPopup) {
    setPopup(selectedPopup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__avatar-container"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={avatar}
            alt="Foto de perfil de Jacques Cousteau"
            className="profile__image"
          />

          <div className="profile__avatar-overlay">
            <img src={editButton} alt="" className="profile__avatar-pencil" />
          </div>
        </div>

        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Jacques Cousteau</h1>

            <img
              src={editButton}
              alt="Editar perfil"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>

          <p className="profile__about">Explorador</p>
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
            handleDeleteClick={() => handleOpenPopup(removeCardPopup)}
          />
        ))}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
