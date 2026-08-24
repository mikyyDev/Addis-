import { Search } from "lucide-react";

import profile from "../../../assets/images/profile.png";

import { useSongStore } from "../../../store/song.store";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ProfileContainer,
  ProfileImage,
} from "./SongHeader.styles";

const SongHeader = () => {
  const { search, setSearch } = useSongStore();

  return (
    <Container>
      <Left>
        <Title>Songs</Title>

        <Subtitle>Manage songs in your music library</Subtitle>
      </Left>

      <Right>
        <SearchContainer>
          <SearchIcon>
            <Search size={16} />
          </SearchIcon>

          <SearchInput
            placeholder="Search songs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>

        <ProfileContainer>
          <ProfileImage src={profile} alt="Profile" />
        </ProfileContainer>
      </Right>
    </Container>
  );
};

export default SongHeader;
