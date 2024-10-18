import CountryListing from "@/components/ui/Country/country-listing";
import countryService from "@/services/country";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function CountriesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["countries"],
    queryFn: countryService.getAllCountries,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });

  return (
    <>
      <h1 className="text-2xl font-bold">List of countries</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <CountryListing />
      </HydrationBoundary>
    </>
  );
}
