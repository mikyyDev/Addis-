import { Disc3, ListMusic, Mic2, Sparkles } from "lucide-react";

import type { LastFMFilter } from "../../../types/lastfm.types";

import { FilterBarContainer, FilterButton, FilterCount } from "./FilterBar.styles";

interface FilterBarProps {
  filter: LastFMFilter;
  counts: {
    tracks: number;
    artists: number;
    albums: number;
  };
  onChange: (filter: LastFMFilter) => void;
}

const OPTIONS: {
  value: LastFMFilter;
  label: string;
  icon: typeof Sparkles;
}[] = [
  { value: "all", label: "All", icon: Sparkles },
  { value: "tracks", label: "Tracks", icon: ListMusic },
  { value: "artists", label: "Artists", icon: Mic2 },
  { value: "albums", label: "Albums", icon: Disc3 },
];

const FilterBar = ({ filter, counts, onChange }: FilterBarProps) => {
  return (
    <FilterBarContainer>
      {OPTIONS.map((option) => {
        const Icon = option.icon;

        const count =
          option.value === "all"
            ? counts.tracks + counts.artists + counts.albums
            : counts[option.value];

        return (
          <FilterButton
            key={option.value}
            type="button"
            active={filter === option.value}
            onClick={() => onChange(option.value)}
          >
            <Icon size={14} />
            <span>{option.label}</span>

            {count > 0 && <FilterCount>{count}</FilterCount>}
          </FilterButton>
        );
      })}
    </FilterBarContainer>
  );
};

export default FilterBar;
