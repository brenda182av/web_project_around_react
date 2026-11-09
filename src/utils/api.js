class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Comprobar las respuestas del servidor
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  // Obtener información del usuario
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // Obtener las tarjetas
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // Agregar Me gusta
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // Quitar Me gusta
  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // Eliminar una tarjeta
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // Actualizar nombre y descripción del perfil
  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then((res) => this._checkResponse(res));
  }

  // Actualizar la fotografía del perfil
  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then((res) => this._checkResponse(res));
  }

  // Agregar una nueva tarjeta
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: import.meta.env.VITE_API_TOKEN,
    "Content-Type": "application/json",
  },
});

export default api;
