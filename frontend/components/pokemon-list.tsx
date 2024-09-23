import { fetchPokemonList } from "@/lib/api";
import { PokemonCard } from "./pokemon-card";

export default async function PokemonList() {
  const { results } = await fetchPokemonList();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((pokemon: any) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
