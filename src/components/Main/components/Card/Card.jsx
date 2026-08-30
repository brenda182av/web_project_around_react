import deleteIcon from "../../../../images/delete.png";
import heartIcon from "../../../../images/heart.svg";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

function Card({ card, handleOpenPopup, handleDeleteClick }) {
  const { name, link, isLiked } = card;

  const imageComponent = {
    children: <ImagePopup card={card} />,
  };

  return (
    <div className="element">
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <button
        className="element__delete"
        type="button"
        aria-label={`Eliminar ${name}`}
        onClick={handleDeleteClick}
      >
        <img src={deleteIcon} alt="" />
      </button>

      <div className="element__name">
        <h2 className="element__name-text">{name}</h2>

        <div className="element__like-container">
          <img
            src={heartIcon}
            alt="Me gusta"
            className={`element__name-image ${
              isLiked ? "element__name-image_active" : ""
            }`}
          />
          <span className="element__like-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
