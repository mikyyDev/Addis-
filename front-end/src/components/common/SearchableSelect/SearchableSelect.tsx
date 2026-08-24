import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import styled from "@emotion/styled";

export interface SearchableSelectOption {
  label: string;
  value: string;
}

interface SearchableSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: SearchableSelectOption[];
}

const SearchableSelect = ({
  value,
  onChange,
  placeholder = "Select an option",
  options,
}: SearchableSelectProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectOption = (option: SearchableSelectOption) => {
    onChange(option.value);
    setOpen(false);
    setQuery("");
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Trigger
        type="button"
        onClick={() => setOpen((previousOpen) => !previousOpen)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{selectedOption?.label ?? placeholder}</span>
        <ChevronDown size={17} aria-hidden="true" />
      </Trigger>

      {open && (
        <Dropdown>
          <SearchBox>
            <Search size={15} aria-hidden="true" />
            <SearchInput
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              aria-label="Search options"
            />
          </SearchBox>

          <Options role="listbox">
            {filteredOptions.length === 0 ? (
              <EmptyMessage>No options found</EmptyMessage>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = option.value === value;

                return (
                  <Option
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => selectOption(option)}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check size={16} aria-hidden="true" />}
                  </Option>
                );
              })
            )}
          </Options>
        </Dropdown>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Trigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  text-align: left;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: #211c2b;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.32);
`;

const SearchBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #b8aec5;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: white;
  font: inherit;

  &::placeholder {
    color: #9b91a7;
  }
`;

const Options = styled.div`
  max-height: 210px;
  overflow-y: auto;
  padding: 4px;
`;

const Option = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #f5f1f8;
  text-align: left;
  cursor: pointer;

  &:hover,
  &[aria-selected="true"] {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const EmptyMessage = styled.p`
  margin: 0;
  padding: 14px 12px;
  color: #b8aec5;
  font-size: 0.9rem;
`;

export default SearchableSelect;
