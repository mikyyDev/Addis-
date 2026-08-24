import { useState, useRef, useEffect } from "react";

import { ChevronDown, Check } from "lucide-react";

import type { Genre } from "../../../types/genre.types";

import {
  SelectWrapper,
  TriggerButton,
  Dropdown,
  OptionRow,
  Checkbox,
  OptionLabel,
  EmptyMessage,
} from "./GenreMultiSelect.styles";

interface GenreMultiSelectProps {
  genres: Genre[];
  value: string[];
  onChange: (ids: string[]) => void;
}

const GenreMultiSelect = ({
  genres,
  value,
  onChange,
}: GenreMultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggle = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const selectedNames = genres
    .filter((g) => value.includes(g._id))
    .map((g) => g.name);

  return (
    <SelectWrapper ref={wrapperRef}>
      <TriggerButton
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        $hasSelection={selectedNames.length > 0}
      >
        <span>
          {selectedNames.length === 0
            ? "Select genres..."
            : selectedNames.join(", ")}
        </span>
        <ChevronDown size={16} />
      </TriggerButton>

      {open && (
        <Dropdown>
          {genres.length === 0 ? (
            <EmptyMessage>No genres available</EmptyMessage>
          ) : (
            genres.map((genre) => {
              const checked = value.includes(genre._id);

              return (
                <OptionRow
                  key={genre._id}
                  type="button"
                  onClick={() => toggle(genre._id)}
                  $checked={checked}
                >
                  <Checkbox $checked={checked}>
                    {checked && <Check size={12} />}
                  </Checkbox>
                  <OptionLabel>{genre.name}</OptionLabel>
                </OptionRow>
              );
            })
          )}
        </Dropdown>
      )}
    </SelectWrapper>
  );
};

export default GenreMultiSelect;
