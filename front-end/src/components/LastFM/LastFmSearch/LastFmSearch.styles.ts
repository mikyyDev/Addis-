import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  z-index: 100;
`;

export const SearchForm = styled.form`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 54px;

  padding: 0 14px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(14px);

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:focus-within {
    border-color: rgba(123, 108, 255, 0.65);

    background: rgba(255, 255, 255, 0.065);

    box-shadow:
      0 0 0 3px rgba(123, 108, 255, 0.1),
      0 12px 35px rgba(0, 0, 0, 0.18);
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  margin-right: 10px;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SearchInput = styled.input`
  flex: 1;

  min-width: 0;

  height: 100%;

  border: none;
  outline: none;

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  font-size: 15px;
  font-weight: 450;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 32px;
  height: 32px;

  margin-left: 6px;

  border: none;
  border-radius: 50%;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;

  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LoadingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 32px;
  height: 32px;

  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    animation: spin 0.9s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const SuggestionsContainer = styled.div`
  position: absolute;

  top: calc(100% + 8px);
  left: 0;
  right: 0;

  overflow: hidden;

  padding: 6px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;

  background: rgba(20, 20, 28, 0.97);

  backdrop-filter: blur(20px);

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.35),
    0 5px 20px rgba(0, 0, 0, 0.15);

  animation: dropdownIn 0.15s ease-out;

  @keyframes dropdownIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SuggestionItem = styled.button`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 9px;

  border: none;
  border-radius: 11px;

  background: transparent;

  text-align: left;

  cursor: pointer;

  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  &:active {
    background: rgba(123, 108, 255, 0.12);
  }
`;

export const SuggestionImageWrapper = styled.div`
  width: 44px;
  height: 44px;

  flex-shrink: 0;

  overflow: hidden;

  border-radius: 8px;

  background: rgba(255, 255, 255, 0.06);
`;

export const SuggestionImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const SuggestionImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SuggestionInfo = styled.div`
  min-width: 0;

  margin-left: 12px;

  display: flex;
  flex-direction: column;

  gap: 3px;
`;

export const SuggestionTitle = styled.span`
  overflow: hidden;

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
  font-weight: 600;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SuggestionArtist = styled.span`
  overflow: hidden;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 12px;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NoSuggestions = styled.div`
  padding: 18px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;

  text-align: center;
`;
