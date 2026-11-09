import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser.name, currentUser.about]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !description.trim() || isSaving) {
      return;
    }

    setIsSaving(true);

    handleUpdateUser({
      name: name.trim(),
      about: description.trim(),
    })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.error("Error al guardar el perfil:", err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          id="profile-name"
          maxLength="40"
          minLength="2"
          name="name"
          placeholder="Nombre"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span
          className="popup__error error-message"
          id="profile-name-error"
        ></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input"
          id="profile-description"
          maxLength="200"
          minLength="2"
          name="description"
          placeholder="Acerca de mí"
          required
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span
          className="popup__error error-message"
          id="profile-description-error"
        ></span>
      </label>

      <button className="popup__button" type="submit" disabled={isSaving}>
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}

export default EditProfile;
