import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSongStore } from "../../../../store/song.store";
import { usePlaylistStore } from "../../../../store/playlist.store";

import {
  Container,
  TabBar,
  Tab,
  TabIndicator,
  ContentGrid,
  SongCard,
  SongArtwork,
  ArtworkPlaceholder,
  SongText,
  SongTitle,
  SongArtist,
  PlaylistCard,
  PlaylistArtwork,
  PlaylistInfo,
  PlaylistName,
  PlaylistCount,
  AlbumCard,
  AlbumArtwork,
  AlbumInfo,
  AlbumName,
  AlbumArtist,
} from "./ContentTabs.styles";

const TABS = ["Popular Songs", "Playlists", "Albums"] as const;

type TabValue = (typeof TABS)[number];

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState<TabValue>("Popular Songs");
  const { songs, openSongDetails } = useSongStore();
  const { playlists } = usePlaylistStore();
  const navigate = useNavigate();

  const displaySongs = songs.slice(0, 9);
  const displayAlbums = Array.from(
    new Map(
      songs.filter((s) => s.albumId).map((s) => [s.albumId!._id, s.albumId!]),
    ).values(),
  ).slice(0, 9);

  return (
    <Container>
      <TabBar>
        {TABS.map((tab) => (
          <Tab
            key={tab}
            $active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && <TabIndicator />}
          </Tab>
        ))}
      </TabBar>

      {activeTab === "Popular Songs" && (
        <ContentGrid $columns={3}>
          {displaySongs.map((song) => (
            <SongCard key={song._id} onClick={() => openSongDetails(song)}>
              <SongArtwork>
                {song.image ? (
                  <img src={song.image} alt={song.title} loading="lazy" />
                ) : (
                  <ArtworkPlaceholder>
                    {song.title.charAt(0)}
                  </ArtworkPlaceholder>
                )}
              </SongArtwork>

              <SongText>
                <SongTitle>{song.title}</SongTitle>
                <SongArtist>{song.artistId?.name}</SongArtist>
              </SongText>
            </SongCard>
          ))}
        </ContentGrid>
      )}

      {activeTab === "Playlists" && (
        <ContentGrid $columns={3}>
          {playlists.slice(0, 9).map((playlist) => (
            <PlaylistCard key={playlist._id} onClick={() => navigate("/playlists")}>
              <PlaylistArtwork>
                {playlist.image ? (
                  <img
                    src={playlist.image}
                    alt={playlist.name}
                    loading="lazy"
                  />
                ) : (
                  <ArtworkPlaceholder>
                    {playlist.name.charAt(0)}
                  </ArtworkPlaceholder>
                )}
              </PlaylistArtwork>
              <PlaylistInfo>
                <PlaylistName>{playlist.name}</PlaylistName>
                <PlaylistCount>
                  {playlist.songs?.length ?? 0} songs
                </PlaylistCount>
              </PlaylistInfo>
            </PlaylistCard>
          ))}
        </ContentGrid>
      )}

      {activeTab === "Albums" && (
        <ContentGrid $columns={3}>
          {displayAlbums.map((album) => (
            <AlbumCard key={album._id} onClick={() => navigate("/albums")}>
              <AlbumArtwork>
                {songs.find((s) => s.albumId?._id === album._id)?.image ? (
                  <img
                    src={songs.find((s) => s.albumId?._id === album._id)?.image}
                    alt={album.name}
                    loading="lazy"
                  />
                ) : (
                  <ArtworkPlaceholder>
                    {album.name.charAt(0)}
                  </ArtworkPlaceholder>
                )}
              </AlbumArtwork>
              <AlbumInfo>
                <AlbumName>{album.name}</AlbumName>
                <AlbumArtist>
                  {
                    songs.find((s) => s.albumId?._id === album._id)?.artistId
                      ?.name
                  }
                </AlbumArtist>
              </AlbumInfo>
            </AlbumCard>
          ))}
        </ContentGrid>
      )}
    </Container>
  );
};

export default ContentTabs;
