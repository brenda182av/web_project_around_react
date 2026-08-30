function Popup({ onClose, title, children }) {
  return (
    <div className="popup popup_opened">
      <div className={title ? "popup__container" : "popup__image-container"}>
        <button
          className={`popup__close ${!title ? "popup__close--image" : ""}`}
          type="button"
          aria-label="Cerrar ventana"
          onClick={onClose}
        >
          &times;
        </button>

        {title && <h2 className="popup__title">{title}</h2>}

        {children}
      </div>
    </div>
  );
}

export default Popup;
