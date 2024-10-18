"use client";

import countryService from "@/services/country";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import CountryFlag from "./country-flag";

export default memo(function CountryTitle(props: { countryCode: string }) {
  const { isLoading, data } = useQuery({
    queryKey: ["countries", props.countryCode],
    queryFn: () => countryService.getCountry(props.countryCode),
  });

  if (isLoading) {
    return <h1>Getting country name...</h1>;
  }

  if (!data) {
    return <h1>Unable to get country name.</h1>;
  }

  return (
    <header className="flex flex-col gap2">
      <h1 className="text-2xl font-bold flex gap-2">
        {data.officialName}
        {data.flag && <CountryFlag flag={data.flag} />}
      </h1>
      <p>Region of {data?.region}</p>
    </header>
  );
});
