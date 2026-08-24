import { Search, Disc3, Headphones } from "lucide-react";

import { useLastFMStore } from "../../../store/lastfm.store";

import {
  Empty,
  IconWrapper,
  Title,
  Message,
  Suggestions,
  SuggestionsTitle,
  SuggestionChips,
  SuggestionChip,
} from "./LastFMEmpty.styles";

const POPULAR_SEARCHES = [
  "Teddy Afro",
  "Aster Aweke",
  "The Weeknd",
  "Tikur Sew",
  "Massinko",
  "Bob Marley",
];

interface LastFMEmptyProps {
  query: string;
}

const LastFMEmpty = ({ query }: LastFMEmptyProps) => {
  const { setQuery } = useLastFMStore();

  const handleSuggestionClick = (term: string) => {
    setQuery(term);

    const { search, addToSearchHistory } = useLastFMStore.getState();
    search(term);
    addToSearchHistory(term);
  };

  return (
    <Empty>
      <IconWrapper>
        {query ? <Search size={28} /> : <Headphones size={28} />}
      </IconWrapper>

      <Title>{query ? "No music found" : "Discover something new"}</Title>

      <Message>
        {query
          ? `We couldn't find any tracks matching "${query}". Try a different artist, song, or album.`
          : "Search for an artist, song, or album to explore music from around the world."}
      </Message>

      {!query && (
        <Suggestions>
          <SuggestionsTitle>
            <Disc3 size={14} />
            Try searching for
          </SuggestionsTitle>

          <SuggestionChips>
            {POPULAR_SEARCHES.map((term) => (
              <SuggestionChip
                key={term}
                type="button"
                onClick={() => handleSuggestionClick(term)}
              >
                {term}
              </SuggestionChip>
            ))}
          </SuggestionChips>
        </Suggestions>
      )}
    </Empty>
  );
};

export default LastFMEmpty;
