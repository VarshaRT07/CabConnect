export interface PlacesResponse {
  place_id: number;
  lat: string;
  lon: string;
  addresstype: string;
  name: string;
  display_name: string;
}

export interface PlaceSearchProps {
  value: PlacesResponse;
  onChange: (value: string) => void;
  placeholder: string
}
