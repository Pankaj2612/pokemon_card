import { useEffect, useState } from "react";
import PokeDexCard from "./components/PokeDexCard";
import Input from "./components/Input";
import Loader from "./components/Loader";

function App() {
  const [pokemon_Data, setPokemon_Data] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setloading] = useState(true);
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
      );
      const data = await response.json();
      const fetchedPokemons = [];

      // Using for...of loop to fetch each Pokémon's details
      for (const element of data.results) {
        const str = element.url;
        const rep = await fetch(str);
        const pokemonData = await rep.json();

        const typeofpokemon = pokemonData.types[0].type.name;
        const id = pokemonData.id;
        const pokemonDetails = {
          id: id,
          img_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`,
          name: capitalizeFirstLetter(element.name),
          type: typeofpokemon,
          color: colors[typeofpokemon],
        };

        fetchedPokemons.push(pokemonDetails); // Store each Pokémon's details
      }

      setPokemon_Data(fetchedPokemons);
      setloading(false);
    };

    fetchdata();
  }, []);

  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update the search term when user types
  };

  // Filter Pokémon based on the search term
  const filteredPokemon = pokemon_Data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-center items-center mt-5 p-2">
          <img
            src="https://fontmeme.com/permalink/241011/67796174957ec6b81cacf85609a93786.png"
            alt="PokeDex"
          />
        </div>
        <div className="m-2 p-2">
          <Input onChange={handleSearch} value={searchTerm} />
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="grid sm:grid-cols-5 gap-0 grid-cols-2 items-center justify-center m-0">
          {filteredPokemon.map((pokemonDetails) => (
            <PokeDexCard
              key={pokemonDetails.id}
              pokemon_data={pokemonDetails}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
