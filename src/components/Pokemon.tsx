import { Pokemon } from "../models/Pokemon";

interface PokemonProps {
  pokemon: Pokemon;
}

export default function PokemonComponent(props: PokemonProps) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <img
          className="rounded-t-lg"
          src={props.pokemon?.sprites.other["official-artwork"].front_default}
          alt={props.pokemon?.name}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.pokemon.name}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ID: {props.pokemon.id}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p className="mb-3 font-bold">Abilities:</p>
            {props.pokemon.abilities.map((ability) => {
              return <p key={ability.ability.name}>{ability.ability.name}</p>;
            })}
          </p>
        </div>
      </div>
    </>
  );
}
