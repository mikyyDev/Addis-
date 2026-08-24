import { Search } from "lucide-react";
import { useEffect } from "react";

import { useDebounce } from "../../../../hooks/useDebounce";

import { useSongStore } from "../../../../store/song.store";

import { Container, Input, SearchIcon } from "./SearchMusic.styles";

const SearchMusic = () => {
  const { search, setSearch, fetchSongs } = useSongStore();

  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    fetchSongs(debouncedSearch);
  }, [debouncedSearch, fetchSongs]);

  return (
    <Container>
      <SearchIcon>
        <Search size={18} />
      </SearchIcon>

      <Input
        value={search}
        placeholder="Search songs..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
};

export default SearchMusic;
