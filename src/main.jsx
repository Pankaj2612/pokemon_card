import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Helmet } from 'react-helmet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Helmet>
        <title>Pokémon App</title>
        <meta name="description" content="Explore the world of Pokémon." />
        <meta name="keywords" content="Pokémon, Pokedex, React, JavaScript" />
        <meta property="og:title" content="Pokémon App" />
        <meta property="og:description" content="Discover Pokémon and their types." />
        <meta property="og:image" content="https://example.com/pokemon-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    <App />
  </StrictMode>,
)
