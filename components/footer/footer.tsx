import type { FC } from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

export const Footer: FC<FooterProps> = (props: FooterProps) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>DCAPLABS</h2>
          <p className={styles.header__para}>
            DCAP LABS is a trading name of Definite Capital Ltd, a limited
            company registered in England and Wales. Company Number 13263030.
            All logos are registered trademarks of their respective owners. All
            contents of this document, unless otherwise credited, are copyright
            © 2021 DCapLabs.
          </p>
          <p className={styles.header__para}>
            Contact us on our social channels or email the team directly at{" "}
            <Link href="mailto:info@dcaplabs.io">info@dcaplabs.io</Link>
          </p>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>Contract Address</li>
            <li>Github</li>
            <li>Linkdeln</li>
            <li>Contact us</li>
            <li>Docs</li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>(c) 2022</div>
    </div>
  );
};

interface FooterProps {}
