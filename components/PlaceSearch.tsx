/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";

let debouncePlacesSearch: any;
const DEBOUNCE_MILLISECONDS = 1500;

interface PlacesResponse {
  place_id: number;
  lat: string;
  lon: string;
  addresstype: string;
  name: string;
  display_name: string;
}

interface PlaceSearchProps {
  value: PlacesResponse;
  onChange: (value: PlacesResponse) => void;
  placeholder: string;
}

const PlaceSearch: React.FC<PlaceSearchProps> = ({ value, onChange, placeholder }) => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value && value.display_name.length > 2) {
      if (debouncePlacesSearch) clearTimeout(debouncePlacesSearch);
      debouncePlacesSearch = setTimeout(() => {
        setLoading(true);
        fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value.display_name}`
        )
          .then((response) => response.json())
          .then((response) => {
            setResults(response);
            setLoading(false);
          });
      }, DEBOUNCE_MILLISECONDS);
    }
  }, [value]);

  return (
    <div className="w-96">
      <Autocomplete
        freeSolo
        options={results}
        getOptionLabel={(option) => option.display_name}
        loading={loading}
        inputValue={value ? value.display_name : ""}
        onInputChange={(event, newValue) => onChange({ ...value, display_name: newValue })}
        onChange={(event, newValue) => onChange(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default PlaceSearch;
