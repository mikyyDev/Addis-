import { useMemo } from "react";

import { useStatStore } from "../../../store/stat.store";

import {
  UniverseContainer,
  OrbitalCanvas,
  CenterDot,
  CenterLabel,
  OrbitalRing,
  OrbitalLabel,
  OrbitalCount,
  ConnectionLine,
} from "./MusicUniverse.styles";

interface OrbitalData {
  label: string;
  count: number;
  radius: number;
  angle: number;
  color: string;
}

const MusicUniverse = () => {
  const { totals, playlistCount, artists, albums, songs } = useStatStore();

  const orbitals = useMemo<OrbitalData[]>(() => {
    const totalSongs = totals?.totalSongs ?? 0;
    const totalAlbums = totals?.totalAlbums ?? 0;
    const totalArtists = totals?.totalArtists ?? 0;
    const totalGenres = totals?.totalGenres ?? 0;

    return [
      {
        label: "Songs",
        count: totalSongs,
        radius: 32,
        angle: -245,
        color: "#6c63ff",
      },
      {
        label: "Albums",
        count: totalAlbums,
        radius: 52,
        angle: -45,
        color: "#ff6584",
      },
      {
        label: "Artists",
        count: totalArtists,
        radius: 72,
        angle: 0,
        color: "#4fc3f7",
      },
      {
        label: "Genres",
        count: totalGenres,
        radius: 92,
        angle: 45,
        color: "#10b981",
      },
      {
        label: "Playlists",
        count: playlistCount,
        radius: 112,
        angle: 90,
        color: "#f97316",
      },
    ];
  }, [totals, playlistCount]);

  // Compute some visual data points
  const topArtistName = useMemo(() => {
    if (artists.length === 0) return null;
    return [...artists].sort((a, b) => b.songCount - a.songCount)[0]?.artist;
  }, [artists]);

  const topAlbumName = useMemo(() => {
    if (albums.length === 0) return null;
    return [...albums].sort((a, b) => b.songCount - a.songCount)[0]?.album;
  }, [albums]);

  const totalSize = useMemo(() => songs.length, [songs]);

  return (
    <UniverseContainer>
      <OrbitalCanvas>
        {/* Connection lines */}
        <ConnectionLine $width={224} $color="rgba(255,255,255,0.04)" />
        <ConnectionLine $width={184} $color="rgba(255,255,255,0.04)" />
        <ConnectionLine $width={144} $color="rgba(255,255,255,0.04)" />
        <ConnectionLine $width={104} $color="rgba(255,255,255,0.04)" />
        <ConnectionLine $width={64} $color="rgba(255,255,255,0.04)" />

        {/* Orbital rings */}
        {orbitals.map((orbital) => (
          <OrbitalRing
            key={orbital.label}
            $radius={orbital.radius}
            $color={orbital.color}
          />
        ))}

        {/* Center */}
        <CenterDot>
          <CenterLabel>{totalSize}</CenterLabel>
        </CenterDot>

        {/* Labels on each ring */}
        {orbitals.map((orbital) => (
          <OrbitalLabel
            key={`label-${orbital.label}`}
            $radius={orbital.radius}
            $angle={orbital.angle}
          >
            <OrbitalCount $color={orbital.color}>{orbital.count}</OrbitalCount>
            {orbital.label}
          </OrbitalLabel>
        ))}
      </OrbitalCanvas>

      {/* Summary info */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {topArtistName && (
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "13px",
              marginBottom: "4px",
            }}
          >
            Most represented:{" "}
            <span style={{ color: "#fff", fontWeight: 600 }}>
              {topArtistName}
            </span>
          </div>
        )}
        {topAlbumName && (
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "13px",
            }}
          >
            Largest album:{" "}
            <span style={{ color: "#fff", fontWeight: 600 }}>
              {topAlbumName}
            </span>
          </div>
        )}
      </div>
    </UniverseContainer>
  );
};

export default MusicUniverse;
