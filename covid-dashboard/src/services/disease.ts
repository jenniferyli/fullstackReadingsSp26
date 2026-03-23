import type {
  CovidData,
  DiseaseApiResponse,
  DiseaseCountryInfo,
} from "@/types/covid";

const REST_DISEASE_API = "https://disease.sh/v3/covid-19/countries";

// Fetch the COVID-19 data for the given country code
// The country code is the ISO 3166-1 alpha-2 code
export async function fetchCovidData(countryCode: string): Promise<CovidData> {
  const response = await fetch(`${REST_DISEASE_API}/${countryCode}`);
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const data: DiseaseApiResponse = await response.json();
  const countryInfo: DiseaseCountryInfo = data.countryInfo;

  // Parse and return the required data
  return {
    countryName: data.country,
    countryCode: countryInfo.iso2,
    countryFlag: countryInfo.flag,
    confirmed: data.cases,
    active: data.active,
    recovered: data.recovered,
  };
}
