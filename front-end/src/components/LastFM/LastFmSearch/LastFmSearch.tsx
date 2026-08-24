import { useEffect, useRef, useState } from "react";
import { Search, X, Loader2, Music2 } from "lucide-react";

import type { LastFMTrack } from "../../../types/lastfm.types";

import {
  SearchWrapper,
  SearchForm,
  SearchIcon,
  SearchInput,
  ClearButton,
  LoadingIcon,
  SuggestionsContainer,
  SuggestionItem,
  SuggestionImageWrapper,
  SuggestionImage,
  SuggestionImagePlaceholder,
  SuggestionInfo,
  SuggestionTitle,
  SuggestionArtist,
  NoSuggestions,
} from "./LastFmSearch.styles";

interface LastFMSearchProps {
  value: string;
  suggestions: LastFMTrack[];
  onChange: (value: string) => void;
  onSubmit: () => void;
  onSuggestionSelect: (track: LastFMTrack) => void;
  loading?: boolean;
}

const LastFMSearch = ({
  value,
  suggestions,
  onChange,
  onSubmit,
  onSuggestionSelect,
  loading = false,
}: LastFMSearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  /*
   * Close dropdown when clicking outside.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
   * Close dropdown when pressing Escape.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFocused(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue || trimmedValue.length < 2 || loading) {
      return;
    }

    setIsFocused(false);

    onSubmit();
  };

  const handleSuggestionClick = (track: LastFMTrack) => {
    setIsFocused(false);

    onSuggestionSelect(track);
  };

  const showSuggestions = isFocused && value.trim().length >= 2 && !loading;

  return (
    <SearchWrapper ref={searchRef}>
      <SearchForm onSubmit={handleSubmit}>
        <SearchIcon>
          <Search size={19} />
        </SearchIcon>

        <SearchInput
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for a song or artist..."
          autoComplete="off"
          aria-label="Search music"
          aria-expanded={showSuggestions}
        />

        {loading ? (
          <LoadingIcon>
            <Loader2 size={18} />
          </LoadingIcon>
        ) : (
          value && (
            <ClearButton
              type="button"
              onClick={() => {
                onChange("");
                setIsFocused(false);
              }}
              aria-label="Clear search"
            >
              <X size={17} />
            </ClearButton>
          )
        )}
      </SearchForm>

      {showSuggestions && (
        <SuggestionsContainer>
          {suggestions.length > 0 ? (
            suggestions.slice(0, 6).map((track) => (
              <SuggestionItem
                key={track.id}
                type="button"
                onClick={() => handleSuggestionClick(track)}
              >
                <SuggestionImageWrapper>
                  {track.image ? (
                    <SuggestionImage
                      src={track.image}
                      alt=""
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <SuggestionImagePlaceholder>
                      <Music2 size={20} />
                    </SuggestionImagePlaceholder>
                  )}
                </SuggestionImageWrapper>

                <SuggestionInfo>
                  <SuggestionTitle title={track.title}>
                    {track.title}
                  </SuggestionTitle>

                  <SuggestionArtist title={track.artist}>
                    {track.artist}
                  </SuggestionArtist>
                </SuggestionInfo>
              </SuggestionItem>
            ))
          ) : (
            <NoSuggestions>No music found for "{value}"</NoSuggestions>
          )}
        </SuggestionsContainer>
      )}
    </SearchWrapper>
  );
};

export default LastFMSearch;
