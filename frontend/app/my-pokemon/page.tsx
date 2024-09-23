import { Suspense } from "react";
import Link from "next/link";
import MyPokemonList from "@/components/my-pokemon-list";

export default function MyPokemon() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Pokemon List</h1>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Pokemon List
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyPokemonList />
      </Suspense>
    </main>
  );
}
