import SearchIcon from "@mui/icons-material/Search";
import { SearchWrapper } from "./SearchBar.styles";
import { InputAdornment, OutlinedInput, FormControl } from "@mui/material";

const SearchBar = ({ handleSearch, width = "100%" }) => {
  return (
    <SearchWrapper>
      <FormControl sx={{ mr: 1, width }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-search"
          type="search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          }
          placeholder="Disabled Search"
          inputProps={{
            "aria-label": "Search",
          }}
          size="small"
          onChange={(e) => handleSearch(e.currentTarget.value)}
        />
      </FormControl>
    </SearchWrapper>
  );
};

export default SearchBar;
