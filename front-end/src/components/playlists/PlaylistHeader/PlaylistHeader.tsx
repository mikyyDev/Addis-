import { useState } from "react";

import { Plus, Search } from "lucide-react";

import { usePlaylistStore } from "../../../store/playlist.store";

import PlaylistCreateModal from "../PlaylistCreateModal/PlaylistCreateModal";

import {
  Container,
  Left,
  Right,
  Title,
  SearchContainer,
  SearchInput,
  AddButton,
} from "./PlaylistHeader.styles";

interface PlaylistHeaderProps {
  onNotify: (type: "success" | "error", message: string) => void;
}

const PlaylistHeader = ({ onNotify }: PlaylistHeaderProps) => {
  const { search, setSearch } = usePlaylistStore();

  const [createOpen, setCreateOpen] = useState(false);

  return (
    <>
      <Container>
        <Left>
          <Title>My Playlists</Title>
        </Left>

        <Right>
          <SearchContainer>
            <Search size={18} />

            <SearchInput
              placeholder="Search playlists..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchContainer>

          <AddButton onClick={() => setCreateOpen(true)}>
            <Plus size={18} />
            Create Playlist
          </AddButton>
        </Right>
      </Container>

      {createOpen && (
        <PlaylistCreateModal
          onClose={() => setCreateOpen(false)}
          onNotify={onNotify}
        />
      )}
    </>
  );
};

export default PlaylistHeader;
