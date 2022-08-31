import { FC, Fragment } from "react";
import styles from "./SectionCard.module.scss";

export const SectionCard: FC<SectionCardProps> = (props: SectionCardProps) => {
  const { children, row } = props;

  return (
    <Fragment>
      <div className={styles.container} style={{ flexDirection: row }}>
        {children}
      </div>
    </Fragment>
  );
};

type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;

interface SectionCardProps {
  children: JSX.Element | JSX.Element[];
  row: FlexDirection;
}
