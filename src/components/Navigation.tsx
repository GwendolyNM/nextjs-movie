'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from '../styles/navigation.module.css';

function Navigation() {
  const path = usePathname();
  const normalizePath = (p: string) => p.replace(/\/$/, '');

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            href="/"
            className={normalizePath(path) === '' ? styles.active : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={normalizePath(path) === '/about-us' ? styles.active : ''}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
