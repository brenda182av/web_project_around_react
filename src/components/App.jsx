import { useState, useEffect } from "react";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // Obtener el usuario y las tarjetas al iniciar
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.error("Error al cargar los datos:", err);
      });
  }, []);

  // Actualizar nombre y descripción
  function handleUpdateUser({ name, about }) {
    return api.setUserInfo({ name, about }).then((updatedUser) => {
      setCurrentUser(updatedUser);
      return updatedUser;
    });
  }

  // Actualizar avatar
  function handleUpdateAvatar({ avatar }) {
    return api.setUserAvatar({ avatar }).then((updatedUser) => {
      setCurrentUser(updatedUser);
      return updatedUser;
    });
  }

  // Agregar o quitar Me gusta
  function handleCardLike(card) {
    const request = card.isLiked
      ? api.removeLike(card._id)
      : api.addLike(card._id);

    return request
      .then((updatedCard) => {
        setCards((currentCards) =>
          currentCards.map((item) =>
            item._id === card._id ? updatedCard : item,
          ),
        );
      })
      .catch((err) => {
        console.error("Error al actualizar Me gusta:", err);
      });
  }

  // Eliminar tarjeta del servidor
  function handleCardDelete(card) {
    return api.deleteCard(card._id).then(() => {
      setCards((currentCards) =>
        currentCards.filter((item) => item._id !== card._id),
      );
    });
  }

  // Agregar una tarjeta al inicio
  function handleAddPlaceSubmit({ name, link }) {
    return api.addCard({ name, link }).then((newCard) => {
      setCards((currentCards) => [newCard, ...currentCards]);

      return newCard;
    });
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className="page">
        <Header />

        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
