import { useContext, useRef, useState } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function EditAvatar({ onClose }) {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const avatarRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (isSaving || !avatarRef.current) {
      return;
    }

    const avatar = avatarRef.current.value.trim();

    if (!avatar) {
      return;
    }

    setIsSaving(true);

    handleUpdateAvatar({ avatar })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.error("Error al actualizar el avatar:", err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          ref={avatarRef}
          className="popup__input"
          id="avatar-link"
          name="avatar"
          placeholder="Enlace a la imagen"
          required
          type="url"
        />
        <span
          className="popup__error error-message"
          id="avatar-link-error"
        ></span>
      </label>

      <button className="popup__button" type="submit" disabled={isSaving}>
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}

export default EditAvatar;
