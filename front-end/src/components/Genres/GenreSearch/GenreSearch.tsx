import { Search, X } from "lucide-react";

import { Wrapper, SearchIcon, Input, ClearButton } from "./GenreSearch.styles";

interface GenreSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const GenreSearch = ({ value, onChange }: GenreSearchProps) => {
  return (
    <Wrapper>
      <SearchIcon>
        <Search size={18} />
      </SearchIcon>

      <Input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search genres..."
        autoComplete="off"
      />

      {value && (
        <ClearButton
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear genre search"
        >
          <X size={17} />
        </ClearButton>
      )}
    </Wrapper>
  );
};

export default GenreSearch;
