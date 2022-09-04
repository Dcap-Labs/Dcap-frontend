import { FC, Fragment } from "react";
import styles from "./ProductCard.module.scss";

export const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
  return (
    <Fragment>
      <div className={styles.product__col} key={props.id}>
        <div className={styles.product__wrap}>
          <div className={styles.product__container}>
            <div
              className={styles.product__inner}
              style={{
                backgroundImage: `url(${props.image})`,
              }}
            >
              <video
                className={styles.product__video}
                preload="none"
                width="auto"
                height="360"
                loop
                autoPlay
                muted
              >
                <source src={props.video} type="video/mp4" />
              </video>
            </div>
            <div className={styles.product__title}>
              <p>{props.name}</p>
            </div>
            <div className={styles.product__qty}>
              <p>{props.qty}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

interface ProductCardProps {
  id: string;
  image: string;
  video: string;
  name: string;
  qty: string;
}
