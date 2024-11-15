//src/components/Navigation.js
import React from 'react';
import Link from 'next/link';
import styles from './nav.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
        <Link
            href="/"
            className="font-bold text-lg sm:px-6 sm:text-xl md:px-8 md:text-2xl lg:px-10 lg:text-4xl
             hover:text-gray-300"
            >Portfolio
        </Link>

      <div className="">
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;