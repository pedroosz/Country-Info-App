"use client";

import countryService from "@/services/country";
import { useQuery } from "@tanstack/react-query";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export default function CountryPopulationChart(props: { countryCode: string }) {
  const { isLoading, data } = useQuery({
    queryKey: ["countries", props.countryCode],
    queryFn: () => countryService.getCountry(props.countryCode),
  });

  if (isLoading) {
    return <h1>Getting country population over the years...</h1>;
  }

  if (!data) {
    return <h1>Unable to get country population.</h1>;
  }

  return (
    <div className="h-full max-h-[50vh]">
      <h1 className="font-semibold text-sm">Population over time</h1>

      {!data.population && <h1>Unable to get population data.</h1>}
      {data.population && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={600}
            height={300}
            data={data.population.populationCounts}
            margin={{
              top: 5,
              bottom: 5,
            }}>
            <Legend />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
