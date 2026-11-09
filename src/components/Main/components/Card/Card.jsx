import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

import deleteIcon from "../../../../images/delete.png";
import heartIcon from "../../../../images/heart.svg";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

function Card({ card, handleOpenPopup, handleDeleteClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, link, isLiked, owner } = card;

  const ownerId = typeof owner === "object" ? owner?._id : owner;

  const isOwn = ownerId === currentUser._id;

  const imageComponent = {
    children: <ImagePopup card={card} />,
  };

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <div className="element">
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />

      {isOwn && (
        <button
          className="element__delete"
          type="button"
          aria-label={`Eliminar ${name}`}
          onClick={handleDeleteClick}
        >
          <img src={deleteIcon} alt="" />
        </button>
      )}

      <div className="element__name">
        <h2 className="element__name-text">{name}</h2>

        <div className="element__like-container">
          <button
            type="button"
            onClick={handleLikeClick}
            aria-label={`Me gusta: ${name}`}
            aria-pressed={Boolean(isLiked)}
            style={{
              border: "none",
              padding: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img
              src={heartIcon}
              alt=""
              className={`element__name-image ${
                isLiked ? "element__name-image_active" : ""
              }`}
            />
          </button>

          <span className="element__like-count">{isLiked ? 1 : 0}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
