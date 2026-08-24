import { useState } from "react";

import {
  MoreVertical,
  Eye,
  ListMusic,
  Pencil,
  Video,
  Music2,
  ExternalLink,
  Trash2,
} from "lucide-react";

import type { Song } from "../../../types/song.types";

import { useSongStore } from "../../../store/song.store";

import {
  getYouTubeUrl,
  getSpotifyUrl,
  getLastFmUrl,
} from "../../../utils/musicLinks";

import {
  Wrapper,
  MenuButton,
  Backdrop,
  Menu,
  MenuItem,
  Divider,
} from "./SongActionsMenu.styles";

interface Props {
  song: Song;
}

const SongActionsMenu = ({ song }: Props) => {
  const [open, setOpen] = useState(false);

  const {
    openSongDetails,
    openAddToPlaylist,
    openEditSong,
    selectSong,
  } = useSongStore();

  const close = () => {
    setOpen(false);
  };

  const handleAction = (action: () => void) => {
    close();

    action();
  };

  return (
    <Wrapper>
      <MenuButton
        type="button"
        aria-label={`Actions for ${song.title}`}
        onClick={() => setOpen((value) => !value)}
      >
        <MoreVertical size={18} />
      </MenuButton>

      {open && (
        <>
          <Backdrop onClick={close} />

          <Menu>
            <MenuItem
              type="button"
              onClick={() => handleAction(() => openSongDetails(song))}
            >
              <Eye size={16} />
              View Details
            </MenuItem>

            <MenuItem
              type="button"
              onClick={() => handleAction(() => openAddToPlaylist(song))}
            >
              <ListMusic size={16} />
              Add to Playlist
            </MenuItem>

            <MenuItem
              type="button"
              onClick={() => handleAction(() => openEditSong(song))}
            >
              <Pencil size={16} />
              Edit
            </MenuItem>

            <Divider />

            <MenuItem
              type="button"
              onClick={() =>
                handleAction(() =>
                  window.open(getYouTubeUrl(song), "_blank", "noopener,noreferrer"),
                )
              }
            >
              <Video size={16} />
              Open YouTube
            </MenuItem>

            <MenuItem
              type="button"
              onClick={() =>
                handleAction(() =>
                  window.open(getSpotifyUrl(song), "_blank", "noopener,noreferrer"),
                )
              }
            >
              <Music2 size={16} />
              Open Spotify
            </MenuItem>

            <MenuItem
              type="button"
              onClick={() =>
                handleAction(() =>
                  window.open(getLastFmUrl(song), "_blank", "noopener,noreferrer"),
                )
              }
            >
              <ExternalLink size={16} />
              Open Last.fm
            </MenuItem>

            <Divider />

            <MenuItem
              danger
              type="button"
              onClick={() => handleAction(() => selectSong(song))}
            >
              <Trash2 size={16} />
              Delete
            </MenuItem>
          </Menu>
        </>
      )}
    </Wrapper>
  );
};

export default SongActionsMenu;
