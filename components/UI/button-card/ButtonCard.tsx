import { FC, Fragment } from "react";
import styles from "./ButtonCard.module.scss";

export const ButtonCard: FC<ButtonCardProps> = (props: ButtonCardProps) => {
  const { children } = props;
  return (
    <Fragment>
      <button
        // type={props.type}
        className={styles.button}
        // onClick={props.onClick}
      >
        {children}
      </button>
    </Fragment>
  );
};

interface ButtonCardProps {
  children: string;
//   onClick: React.MouseEventHandler<HTMLButtonElement>;
//   type?: "submit" | "reset" | "button";
}
