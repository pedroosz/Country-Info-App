import CountryNeighbours from "@/components/ui/Country/country-neighbours";
import CountryPopulationChart from "@/components/ui/Country/country-population-chart";
import CountryTitle from "@/components/ui/Country/country-title";
import countryService from "@/services/country";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function CountryInfoPage(props: {
  params: { countryCode: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["countries", props.params.countryCode],
    queryFn: () => countryService.getCountry(props.params.countryCode),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CountryTitle countryCode={props.params.countryCode} />
        <CountryNeighbours countryCode={props.params.countryCode} />
        <CountryPopulationChart countryCode={props.params.countryCode} />
      </HydrationBoundary>
    </>
  );
}
