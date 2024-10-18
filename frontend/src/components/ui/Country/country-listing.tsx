"use client";

import countryService from "@/services/country";
import { useQuery } from "@tanstack/react-query";
import CountryCard from "./country-card";

export default function CountryListing() {
  const { isLoading, data } = useQuery({
    queryKey: ["countries"],
    queryFn: countryService.getAllCountries,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {!data ? (
        <h1 className="col-span-full">Unable to get country data.</h1>
      ) : (
        data.map((country) => (
          <CountryCard key={country.countryCode} country={country} />
        ))
      )}
    </section>
  );
}
