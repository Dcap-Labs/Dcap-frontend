import { FC, Fragment } from "react";
import styles from "./ImageCard.module.scss";

export const ImageCard: FC<ImageCardProps> = (props: ImageCardProps) => {
  const { image, alt } = props;
  return (
    <Fragment>
      <div className={styles.image}>
	  <img
        className={styles.image__img}
        src={image}
        alt={alt}
      />
	  </div>
    </Fragment>
  );
};

interface ImageCardProps {
	image: string;
	alt: string;
}
