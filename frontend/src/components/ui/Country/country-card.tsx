import { TCountry } from "@/@types";
import Link from "next/link";

interface CountryCardProps {
  country: TCountry;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="bg-neutral-50 rounded-md p-4 text-center">
      <Link href={`/countries/${country.countryCode}`}>
        <h1>{country.name}</h1>
      </Link>
    </div>
  );
}
