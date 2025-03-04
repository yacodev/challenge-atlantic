
#  - challenge - Atlantic City

En este repositorio se utiliza el stack de React + TypeScript + Vite para desarrollar el reto frontend de la empresa Atlanctic City.
Herramientas que se utilizaron:
- Tailwind
- Zustand para el manejo de estado y la persistencia.
- axios para obtener los datos de la API.
- react-router-dom para la navegación


## Explicación de la App

1. En la primera vista, la aplicación le pedirá que se ingrese el nombre de usuario 
2. En la segunda vista, se muestra un listado de los pokemones, puede seleccionar un pokemon para ver los detalles.
3. Puede caprturar cualquier pokemon.
3. Tambien tiene la opción de hacer click en  el boton "ver pokemones capturados", lo que le redigira al  historial de pokemones capturados.

Puedes acceder al link desplegado en:
https://challenge-atlantic.vercel.app/


## Estructura del repositorio

This repository has the following  organization:

    ├── src                     # React - app
        ├── components
            ├── Button              # Component
            ├── DetailsPokemonCard  # Component
            ├── Loading                 # Component
            ├── PokemonCard             # Component
        ├── Page
            ├── Login                   # Page to input user name
            ├── Pokemons                 # Page to register user information
            ├── PokemonsCaptured          # Page show pokemons captured
            ├── Details                   # Page show pokemon details
        ├── hooks
            ├── useUser                # Manage user information
        ├── router
            ├── AppRouter               # navigate
        ├── store
            ├── pokemonStore            # to save data about pokemon captured
            ├── userStore             # to save data about user name
        ├── interfaces
            ├── pokemon                  
        ├── services
            ├── pokemonServices         #  API services 
            
    └── README.md                   # README

## Run

En caso de querer clonar el repositorio y probar localmente, haz lo siguiente:

1. Clone el repositorio.
2. Ejecutar:

```bash
npm install
```


4. Ejecutar

```bash
npm run dev
```

## Contacto
* Linkedin: [carlos yaco](https://www.linkedin.com/in/carlos-yaco-tincusi/)
* website: [web](https://yacodev.com)

##  Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).
