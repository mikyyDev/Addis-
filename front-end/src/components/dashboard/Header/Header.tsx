import { Search } from "lucide-react";
import { useEffect } from "react";

import { useAuthStore } from "../../../store/auth.store";
import { useSongStore } from "../../../store/song.store";
import { useDebounce } from "../../../hooks/useDebounce";
import MobileToggle from "../Sidebar/MobileToggle";

import {
  Container,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ProfileContainer,
  ProfileImage,
  AvatarInitials,
} from "./Header.styles";

const Header = () => {
  const { user } = useAuthStore();
  const { search, setSearch, fetchSongs } = useSongStore();
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    fetchSongs(debouncedSearch);
  }, [debouncedSearch, fetchSongs]);

  return (
    <Container>
      <MobileToggle />

      <SearchContainer>
        <SearchIcon>
          <Search size={15} />
        </SearchIcon>

        <SearchInput
          type="text"
          value={search}
          placeholder="Search Music"
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search songs"
        />
      </SearchContainer>

      <ProfileContainer>
        {user?.avatar ? (
          <ProfileImage src={user.avatar} alt={user.username} />
        ) : (
          <AvatarInitials>{user?.username?.charAt(0) ?? "U"}</AvatarInitials>
        )}
      </ProfileContainer>
    </Container>
  );
};

export default Header;
