import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const id = url.split("/").filter(Boolean).pop();

  return (
    <Link href={`/pokemon/${id}`}>
      <div className="border rounded p-4 hover:shadow-lg transition-shadow">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          width={96}
          height={96}
          className="mx-auto mb-2"
        />
        <h2 className="text-center capitalize">{name}</h2>
      </div>
    </Link>
  );
}
