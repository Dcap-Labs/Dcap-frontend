import { FC } from "react";
import Link from "next/link";
import { ConnectButton, NavItem } from "@components";
import styles from "./header.module.scss";

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.header__logo}
          src="https://dcaplabs.io/assets/front/img/core-img/newlogo.svg"
          alt="Dcap Logo"
        />
        <Link href="/">
          <h1 className={styles.header__text}>Dcap labs</h1>
        </Link>
      </div>
      <div className={styles.header__nav}>
        <NavItem />
        <ConnectButton />
        {/* <ButtonCard>Connect Wallet</ButtonCard> */}
      </div>
    </div>
  );
};

interface HeaderProps {}
