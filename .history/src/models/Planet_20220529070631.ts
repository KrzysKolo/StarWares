export interface Planet {
  name: string,
  diameter: string,
  rotation_period: string,
  orbital_period: string,
  population: string,
  climate: string,
  surface_water: string,
  url: string,
}
export interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}