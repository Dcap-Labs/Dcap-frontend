import type { FC } from "react";
import styles from "./footer.module.scss";

export const Footer: FC<FooterProps> = (props: FooterProps) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>BlocEvent</h2>
          <p className={styles.header__para}>
            A decentralized event app with poap mint for all events attendee
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
