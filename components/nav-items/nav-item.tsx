import { FC } from "react";
import Link from "next/link";
import styles from "./nav-item.module.scss";

export const NavItem: FC = () => {
  return (
    <ul className={styles.list}>
      <Link href="./academy">
        <li className={styles.li}>Academy</li>
      </Link>
      <Link href="/about">
        <li className={styles.li}>About Us</li>
      </Link>
      <Link href="/team">
        <li className={styles.li}>The Team</li>
      </Link>
      <Link href="/drops">
        <li className={styles.li}>Drops</li>
      </Link>
      <a
        href="https://discord.com/channels/983775153462841414/1006939383112409232"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.li}>Discord</li>
      </a>
    </ul>
  );
};
