'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>📚 BookShare</div>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link href="/favourites" onClick={() => setIsOpen(false)}>Favourites</Link></li>
        <li><Link href="/shared" onClick={() => setIsOpen(false)}>Shared</Link></li>
      </ul>
    </nav>
  );
}
