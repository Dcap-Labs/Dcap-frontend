import { FC, Fragment } from "react";
import styles from "./SectionWidthCard.module.scss";

export const SectionWidthCard: FC<SectionWidthCard> = (
  props: SectionWidthCard
) => {
  const { children, width } = props;

  return (
    <Fragment>
      <div
        className={styles.container}
        style={{ maxWidth: width, flex: `0 0 ${width}` }}
      >
        {children}
      </div>
    </Fragment>
  );
};

interface SectionWidthCard {
  children: JSX.Element | JSX.Element[];
  width: string;
}
