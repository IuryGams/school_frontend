"use client";
import * as S from "./styled";
import { Search, X } from "lucide-react";
import { useTableContext } from "@/shared/contexts/SearchInputContext";

interface SearchInputProps {
  placeholder?: string;
}

function SearchInputTable({ placeholder }: SearchInputProps) {
  const { search, setSearch } = useTableContext();

  function handleClearSearch() {
    setSearch("");
  }

  return (
    <S.ContainerInput>
      <i>
        <Search size={18} />
      </i>
      <input
        type="search"
        value={search}
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length > 0 && (
        <S.ButtonClear type="button" onClick={handleClearSearch}>
          <X size={18} />
        </S.ButtonClear>
      )}
    </S.ContainerInput>
  );
}

export default SearchInputTable;
