function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
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

      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
