import { useSongStore } from "../../../../store/song.store";

import SongRow from "../SongRow/SongRow";

import { Container, SectionHeader, SectionTitle, SongCount, Header, EmptyState, EmptyIcon } from "./SongList.styles";

const SongList = () => {
  const { songs, loading } = useSongStore();

  if (loading) {
    return (
      <Container>
        <SectionHeader>
          <SectionTitle>All Songs</SectionTitle>
        </SectionHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: 72,
                borderRadius: 14,
                background: "rgba(255,255,255,0.03)",
              }}
            />
          ))}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <SectionHeader>
        <SectionTitle>All Songs</SectionTitle>
        <SongCount>{songs.length} songs</SongCount>
      </SectionHeader>

      {!songs.length ? (
        <EmptyState>
          <EmptyIcon>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </EmptyIcon>
          <p style={{ margin: 0 }}>No songs yet. Add your first song to get started.</p>
        </EmptyState>
      ) : (
        <>
          <Header>
            <span>Song</span>
            <span>Artist</span>
            <span>Album</span>
            <span>Genre</span>
            <span>Actions</span>
          </Header>

          {songs.map((song) => (
            <SongRow key={song._id} song={song} />
          ))}
        </>
      )}
    </Container>
  );
};

export default SongList;
