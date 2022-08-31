import { FC } from "react";
import { ConnectButton, NavItem } from "@components";
import styles from "./header.module.scss";

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const {} = props;
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <img
        className={styles.header__logo}
        src="https://dcaplabs.io/assets/front/img/core-img/emblem.svg"
        alt="DCAPS Logo"
      />
      <h1 className={styles.header__text}>Dcap labs</h1>
    </div>
    <div className={styles.header__nav}>
    <NavItem />
    {/* <ButtonCard>Connect Wallet</ButtonCard> */}
    </div>
  </div>
  );
};

interface HeaderProps {}
