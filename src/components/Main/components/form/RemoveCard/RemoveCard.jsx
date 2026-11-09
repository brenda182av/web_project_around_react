function RemoveCard({ onConfirm }) {
  function handleSubmit(event) {
    event.preventDefault();
    onConfirm();
  }

  return (
    <form
      className="popup__form"
      name="remove-card-form"
      onSubmit={handleSubmit}
    >
      <button className="popup__button" type="submit">
        Sí
      </button>
    </form>
  );
}

export default RemoveCard;
