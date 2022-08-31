import { FC, Fragment, ReactNode } from "react";
import styles from "./PageCard.module.scss";

export const PageCard: FC<PageCardProps> = (props: PageCardProps) => {
  const { children } = props;
  return (
    <Fragment>
      <div className={styles.container}>{children}</div>
    </Fragment>
  );
};

interface PageCardProps {
  children: ReactNode;
}
