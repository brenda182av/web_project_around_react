
# Alrededor de los EE. UU. — React

Proyecto de desarrollo web realizado durante el Sprint 15 del bootcamp de Desarrollo Web de TripleTen.

## Descripción

Alrededor de los EE. UU. es una aplicación web interactiva que permite a los usuarios administrar su perfil, compartir fotografías de lugares y dar Me gusta a las publicaciones.

El proyecto comenzó con HTML, CSS y JavaScript y posteriormente fue migrado a React. En este sprint se implementó la comunicación con una API REST para almacenar y recuperar información del servidor.

## Funcionalidades

- Visualización del perfil del usuario.
- Edición del nombre y descripción del perfil.
- Actualización de la fotografía de perfil.
- Carga de tarjetas desde la API.
- Creación de nuevas tarjetas con título e imagen.
- Agregar y quitar Me gusta a las fotografías.
- Eliminación de tarjetas propias mediante una ventana de confirmación.
- Visualización ampliada de imágenes en ventanas emergentes.
- Persistencia de los cambios mediante solicitudes al servidor.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Vite
- JSX
- React Hooks: useState, useEffect, useContext y useRef
- Context API
- Fetch API y Promises
- Git y GitHub
- ESLint

## Arquitectura del proyecto

La aplicación está organizada mediante componentes reutilizables.

- `App.jsx`: administra la información del usuario, las tarjetas y las operaciones con la API.
- `Main.jsx`: muestra el perfil y las tarjetas, y administra las ventanas emergentes.
- `Card.jsx`: representa una fotografía con sus opciones de interacción.
- `EditProfile.jsx`: formulario para modificar la información del usuario.
- `EditAvatar.jsx`: formulario para cambiar la fotografía del perfil.
- `NewCard.jsx`: formulario para agregar nuevas tarjetas.
- `RemoveCard.jsx`: formulario de confirmación para eliminar tarjetas.
- `CurrentUserContext.js`: comparte la información del usuario entre componentes.
- `api.js`: centraliza las solicitudes HTTP al servidor.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/brenda182av/web_project_around_react.git
```

### 2. Entrar al proyecto

```bash
cd web_project_around_react
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar la API

Crear un archivo `.env.local` en la raíz del proyecto y agregar el token proporcionado por TripleTen:

```env
VITE_API_TOKEN=TU_TOKEN_DE_TRIPLETEN
```

No subir el archivo `.env.local` al repositorio.

### 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite, configurada normalmente como:

http://localhost:3000/

## Comandos disponibles

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Aprendizajes del Sprint 15

Durante este proyecto reforcé mis conocimientos sobre los componentes de React, la administración del estado y la comunicación entre componentes mediante props y Context API.

También implementé solicitudes GET, POST, PATCH, PUT y DELETE para interactuar con una API REST.

Uno de los principales aprendizajes fue elevar el estado de las tarjetas al componente App, manteniendo una arquitectura más organizada y facilitando la actualización de la interfaz después de recibir respuestas del servidor.

## Repositorio

https://github.com/brenda182av/web_project_around_react

## Autora

Brenda Gámez

Proyecto académico desarrollado como parte del bootcamp de Desarrollo Web de TripleTen.
