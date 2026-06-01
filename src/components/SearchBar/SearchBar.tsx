import type { SubmitEventHandler } from "react";
import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface SearchFormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const onSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const elements = e.currentTarget.elements as SearchFormElements;
    const query = elements.search.value.trim();
    if (!query) {
      toast.error("Add search!");
      return;
    }
    onSearch(query);
  };
  return (
    <header>
      <form onSubmit={onSubmit}>
        <label htmlFor="search" className={styles.searchLabel}>
          <input
            id="search"
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={styles.submit} type="submit">
            <IoSearchOutline />
          </button>
        </label>
      </form>
    </header>
  );
}
