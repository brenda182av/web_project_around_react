function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
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
        />
        <span
          className="popup__error error-message"
          id="profile-description-error"
        ></span>
      </label>

      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditProfile;
