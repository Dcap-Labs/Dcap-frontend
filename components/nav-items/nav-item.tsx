import { FC } from "react";
import styles from "./nav-item.module.scss";

export const NavItem: FC = () => {


  return (
    <ul className={styles.list}>
    <li className={styles.li}>Academy</li>
    <li className={styles.li}>About Us</li>
    <li className={styles.li}>The Team</li>
    <li className={styles.li}>Drops</li>
    <li className={styles.li}>Discord</li>
  </ul>
  );
};
