// Country information returned by the disease.sh API
export interface DiseaseCountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

// API response from the disease.sh API for a specific country
export interface DiseaseApiResponse {
  updated: number;
  country: string;
  countryInfo: DiseaseCountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

// Internal type for the COVID-19 data that is used in the application
export interface CovidData {
  countryName: string;
  countryCode: string;
  countryFlag: string;
  confirmed: number;
  active: number;
  recovered: number;
}
