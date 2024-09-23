"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { releasePokemon, renamePokemon } from "@/lib/api";

export default function MyPokemonList() {
  const [myPokemon, setMyPokemon] = useState<any[]>([]);

  useEffect(() => {
    const storedPokemon = JSON.parse(localStorage.getItem("myPokemon") || "[]");
    setMyPokemon(storedPokemon);
  }, []);

  const handleRelease = async (index: number) => {
    const { success } = await releasePokemon();
    if (success) {
      const updatedPokemon = [...myPokemon];
      updatedPokemon.splice(index, 1);
      setMyPokemon(updatedPokemon);
      localStorage.setItem("myPokemon", JSON.stringify(updatedPokemon));
    } else {
      alert("Failed to release the Pokemon. Try again!");
    }
  };

  const handleRename = async (index: number) => {
    const pokemon = myPokemon[index];
    const renameCount = pokemon.renameCount || 0;
    const { newName } = await renamePokemon(pokemon.nickname, renameCount);
    const updatedPokemon = [...myPokemon];
    updatedPokemon[index] = {
      ...pokemon,
      nickname: newName,
      renameCount: renameCount + 1,
    };
    setMyPokemon(updatedPokemon);
    localStorage.setItem("myPokemon", JSON.stringify(updatedPokemon));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {myPokemon.map((pokemon, index) => (
        <div key={`${pokemon.name}-${index}`} className="border rounded p-4">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={96}
            height={96}
            className="mx-auto mb-2"
          />
          <h2 className="text-center capitalize mb-2">{pokemon.name}</h2>
          <p className="text-center mb-2">Nickname: {pokemon.nickname}</p>
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => handleRelease(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Release
            </button>
            <button
              onClick={() => handleRename(index)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Rename
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
