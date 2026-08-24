import { useLastFMStore } from "../../../store/lastfm.store";

import TrackCard from "../TrackCard/TrackCard";

import { List } from "./TrackGrid.styles";

interface TrackGridProps {
  onSaveSuccess?: (message: string) => void;
  onSaveError?: (message: string) => void;
}

const TrackGrid = ({ onSaveSuccess, onSaveError }: TrackGridProps) => {
  const { tracks } = useLastFMStore();

  if (tracks.length === 0) {
    return null;
  }

  return (
    <List>
      {tracks.map((track, index) => (
        <TrackCard
          key={track.id}
          track={track}
          index={index}
          onSaveSuccess={onSaveSuccess}
          onSaveError={onSaveError}
        />
      ))}
    </List>
  );
};

export default TrackGrid;
