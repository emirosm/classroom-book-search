'use client';

import styles from '@/styles/components/SearchBar.module.scss';

interface Props {
  query: string;
  setQuery: (q: string) => void;
}

export default function SearchBar({ query, setQuery }: Props) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
      />
    </div>
  );
}
