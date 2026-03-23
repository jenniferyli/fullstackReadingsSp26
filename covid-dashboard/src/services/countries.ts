import type { CountryData, PartialCountryData } from "@/types/country";

const REST_COUNTRIES_API =
  "https://restcountries.com/v3.1/all?fields=name,cca2,cca3";

// Fetch the list of countries from the REST Countries API
export async function fetchCountries(): Promise<CountryData[]> {
  const response = await fetch(REST_COUNTRIES_API);
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const data: PartialCountryData[] = await response.json();

  // Map the API data to the required format
  return data.map((country) => ({
    name: country.name.common,
    code: country.cca2,
  }));
}
