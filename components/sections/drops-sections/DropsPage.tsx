import { FC, Fragment } from "react";
import styles from "./DropsPage.module.scss";
import { FeaturedProducts } from "./FeaturedProducts";
import { Hoodies } from "./Hoodies";
import { Sneakers } from "./Sneakers";
import { TShirts } from "./TShirts";

export const DropPage: FC = () => {
  //
  return (
    <Fragment>
      <div className={styles.drops}>
        <img
          src="https://dcaplabs.io/assets/front/img/core-img/left.svg"
          alt="left icon"
        />
        <h1>Drops</h1>
        <img
          src="https://dcaplabs.io/assets/front/img/core-img/right.svg"
          alt="right icon"
        />
      </div>
      <div className={styles.heading}>
        <h1>FEATURED PRODUCTS</h1>
      </div>
      <div className={styles.product}>
        <FeaturedProducts />
      </div>
      <div className={styles.heading__products}>
        <h1>Hoodies</h1>
      </div>
      <div className={styles.product}>
        <Hoodies />
      </div>

      <div className={styles.heading__products}>
        <h1>Sneakers</h1>
      </div>
      <div className={styles.product}>
        <Sneakers />
      </div>

      <div className={styles.heading__products}>
        <h1>T-Shirts</h1>
      </div>
      <div className={styles.product}>
        <TShirts />
      </div>
    </Fragment>
  );
};
