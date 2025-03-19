import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <ul className={`list-reset ${styles.navbar}`}>
      <li className={`title ${styles.navbar__item}`}>
        <Link href="#Intro"> Intro</Link>
      </li>
      <li className={`title ${styles.navbar__item}`}>
        <Link href="#About"> About</Link>
      </li>
      <li className={`title ${styles.navbar__item}`}>
        <Link href="#Featured"> Featured</Link>
      </li>
    </ul>
  );
};
