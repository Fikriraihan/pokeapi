import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { CatchPokemon } from "@/components/catch-pokemon";
import { fetchPokemonDetails } from "@/lib/api";

interface PokemonDetailProps {
  params: { id: string };
}

export default async function PokemonDetail({ params }: PokemonDetailProps) {
  const pokemon = await fetchPokemonDetails(params.id);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{pokemon.name}</h1>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Pokemon List
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="mb-4 md:mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Types</h2>
          <ul className="mb-4">
            {pokemon.types.map((type: any) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Moves</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {pokemon.moves.slice(0, 10).map((move: any) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CatchPokemon pokemon={pokemon} />
      </Suspense>
    </div>
  );
}
