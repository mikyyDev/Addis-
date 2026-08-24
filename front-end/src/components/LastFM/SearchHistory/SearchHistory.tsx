import { History } from "lucide-react";

import { useLastFMStore } from "../../../store/lastfm.store";

import {
  Section,
  Header,
  Title,
  ClearButton,
  Chips,
  Chip,
  ChipButton,
  ChipRemove,
} from "./SearchHistory.styles";

const SearchHistory = () => {
  const {
    searchHistory,
    clearSearchHistory,
    removeFromSearchHistory,
    setQuery,
  } = useLastFMStore();

  const runSearch = (item: string) => {
    setQuery(item);

    const { search, addToSearchHistory } = useLastFMStore.getState();
    search(item);
    addToSearchHistory(item);
  };

  if (searchHistory.length === 0) {
    return null;
  }

  return (
    <Section>
      <Header>
        <Title>
          <History size={16} style={{ marginRight: 6, verticalAlign: -2 }} />
          Recent Searches
        </Title>

        <ClearButton type="button" onClick={clearSearchHistory}>
          Clear all
        </ClearButton>
      </Header>

      <Chips>
        {searchHistory.map((item) => (
          <Chip key={item}>
            <ChipButton type="button" onClick={() => runSearch(item)}>
              {item}
            </ChipButton>

            <ChipRemove
              type="button"
              onClick={() => removeFromSearchHistory(item)}
              title="Remove from recent searches"
            >
              ✕
            </ChipRemove>
          </Chip>
        ))}
      </Chips>
    </Section>
  );
};

export default SearchHistory;
