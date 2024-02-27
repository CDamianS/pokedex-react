import React from "react";
import "./App.css";
import { Pokemon } from "./models/Pokemon";
import { PokeApi } from "./api/PokeApi";
import PokemonComponent from "./components/Pokemon";
import SearchBox from "./components/SearchBox";

function App() {
  const [pokemonNumber, setPokemonNumber] = React.useState<string | undefined>(
    undefined,
  );
  const [pokemon, setPokemon] = React.useState<Pokemon | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>(undefined);
  function buscar() {
    setLoading(true);
    setError(undefined);
    PokeApi.getPokemonById(pokemonNumber)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Pokemon no encontrado");
      });
  }
  return (
    <div className="App">
      <SearchBox
        onChange={(event) => {
          setPokemonNumber(event.target.value);
        }}
        onClick={() => buscar()}
        onSubmit={(event) => {
          event.preventDefault(); // Prevenir el comportamiento de envío del formulario por defecto
          buscar(); // Llamar a la función buscar para realizar la búsqueda
        }}
        value={pokemonNumber}
      />
      {loading && <p>Cargando...</p>}
      {!loading && pokemon && !error && (
        <div>
          <PokemonComponent pokemon={pokemon}></PokemonComponent>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
