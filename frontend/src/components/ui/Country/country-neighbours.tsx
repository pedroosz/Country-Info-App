"use client";

import { TCountryBorder } from "@/@types";
import countryService from "@/services/country";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import CountryFlag from "./country-flag";

function CountryNeighbourLink({ neighbour }: { neighbour: TCountryBorder }) {
  return (
    <Link
      className="bg-neutral-50 rounded-md px-4 flex gap-2 py-1 items-center focus:opacity-50"
      key={neighbour.countryCode}
      href={`/countries/${neighbour.countryCode}`}>
      {neighbour.flag && <CountryFlag flag={neighbour.flag} />}
      <h1>{neighbour.commonName}</h1>
    </Link>
  );
}

export default function CountryNeighbours(props: { countryCode: string }) {
  const { isLoading, data } = useQuery({
    queryKey: ["countries", props.countryCode],
    queryFn: () => countryService.getCountry(props.countryCode),
  });

  if (isLoading) {
    return <h1>Getting country neighbours...</h1>;
  }

  if (!data) {
    return <h1>Unable to find data about this country borders.</h1>;
  }

  const neighbourTitle = !!data.borders.length
    ? `${data.commonName} has border with`
    : `${data.commonName} has no borders with other countries!`;

  return (
    <section className="space-y-2">
      <h1 className="text-sm font-semibold">{neighbourTitle}</h1>

      <div className="flex flex-wrap gap-4">
        {data?.borders.map((neighbour) => (
          <CountryNeighbourLink
            key={neighbour.countryCode}
            neighbour={neighbour}
          />
        ))}
      </div>
    </section>
  );
}
