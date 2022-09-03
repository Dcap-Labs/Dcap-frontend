import { FC, Fragment } from "react";
import styles from './ProductCard.module.scss'

export const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
  return (
    <Fragment>
      <div className={styles.product__col} key={Math.random()}>
        <div className={styles.product__wrap}>
          <div className={styles.product__container}>
            <div
              className={styles.product__inner}
              style={{
                backgroundImage: `${props.bg}`,
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
                <source src={props.url} type="video/mp4" />
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
	bg: string,
	url: string,
	name: string,
	qty: string,
}