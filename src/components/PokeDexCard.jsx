import "./PokeDex.css";

export default function PokeDexCard({ pokemon_data }) {
  return (
    <div className="poke-container" id="poke-container">
      <div className="pokemon" style={{ backgroundColor: pokemon_data.color }}>
        <div className="img-container">
          <img src={pokemon_data.img_url} alt="" />
        </div>
        <div className="info">
          <span className="number">{pokemon_data.id}</span>
          <h3 className="name">{pokemon_data.name}</h3>
          <small className="type">
            Type: <span>{pokemon_data.type}</span>{" "}
          </small>
        </div>
      </div>
    </div>
  );
}
