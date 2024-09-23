const API_BASE_URL = "http://localhost:8000/api";
const POKE_API_BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(limit = 20, offset = 0) {
  const response = await fetch(
    `${POKE_API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
}

export async function fetchPokemonDetails(id: string) {
  const response = await fetch(`${POKE_API_BASE_URL}/pokemon/${id}`);
  return response.json();
}

export async function catchPokemon() {
  const response = await fetch(`${API_BASE_URL}/pokemon/catch`);
  return response.json();
}

export async function releasePokemon() {
  const response = await fetch(`${API_BASE_URL}/pokemon/release`, {
    method: "POST",
  });
  return response.json();
}

export async function renamePokemon(currentName: string, renameCount: number) {
  const response = await fetch(`${API_BASE_URL}/pokemon/rename`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ currentName, renameCount }),
  });
  return response.json();
}
