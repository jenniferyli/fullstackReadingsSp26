// API response from the https://restcountries.com/v3.1/all endpoint
export interface PartialCountryData {
  name: {
    common: string;
    official: string;
  };
  cca2: string; // ISO 3166-1 alpha-2 code
  cca3: string; // ISO 3166-1 alpha-3 code
}

// Internal type for the country data that is used in the application
export interface CountryData {
  name: string;
  code: string; // ISO 3166-1 alpha-2 code
}
