"use client";

import { catchPokemon } from "@/lib/api";
import { useState } from "react";

export function CatchPokemon({ pokemon }: { pokemon: any }) {
  const [isCatching, setIsCatching] = useState(false);
  const [nickname, setNickname] = useState("");
  const [catchResult, setCatchResult] = useState<string | null>(null);

  const handleCatch = async () => {
    setIsCatching(true);
    const { success } = await catchPokemon();
    if (success) {
      setCatchResult("success");
    } else {
      setCatchResult("fail");
    }
    setIsCatching(false);
  };

  const handleSave = () => {
    if (nickname.trim() === "") {
      alert("Please enter a nickname for your Pokemon.");
      return;
    }
    const myPokemon = JSON.parse(localStorage.getItem("myPokemon") || "[]");
    myPokemon.push({ ...pokemon, nickname, renameCount: 0 });
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
    setCatchResult(null);
    setNickname("");
    alert(
      `Congratulations! You caught ${pokemon.name} and named it ${nickname}.`
    );
  };

  const handleTryAgain = () => {
    setCatchResult(null);
  };

  return (
    <div className="mt-4">
      {catchResult === null && (
        <button
          onClick={handleCatch}
          disabled={isCatching}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isCatching ? "Catching..." : "Catch Pokemon"}
        </button>
      )}
      {catchResult === "success" && (
        <div className="bg-green-100 border border-green-400 rounded p-4">
          <p className="text-green-700 mb-2">You caught {pokemon.name}!</p>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter nickname"
              className="border border-gray-300 p-2 rounded mb-2 sm:mb-0 sm:mr-2 flex-grow text-gray-800 bg-white"
            />
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {catchResult === "fail" && (
        <div className="bg-red-100 border border-red-400 rounded p-4">
          <p className="text-red-700 mb-2">Failed to catch the Pokemon.</p>
          <button
            onClick={handleTryAgain}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
