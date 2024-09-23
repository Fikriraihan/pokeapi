import { Suspense } from "react";
import Link from "next/link";
import PokemonList from "../components/pokemon-list";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pokemon List</h1>
        <Link
          href="/my-pokemon"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          My Pokemon List
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList />
      </Suspense>
    </main>
  );
}
