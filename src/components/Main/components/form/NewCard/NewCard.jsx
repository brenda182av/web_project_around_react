import { useState } from "react";

function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !link.trim() || isSaving) {
      return;
    }

    setIsSaving(true);

    onAddPlaceSubmit({
      name: name.trim(),
      link: link.trim(),
    })
      .catch((err) => {
        console.error("Error al agregar la tarjeta:", err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Título"
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <span
          className="popup__error error-message"
          id="card-name-error"
        ></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Enlace a la imagen"
          required
          type="url"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <span
          className="popup__error error-message"
          id="card-link-error"
        ></span>
      </label>

      <button className="popup__button" type="submit" disabled={isSaving}>
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}

export default NewCard;
