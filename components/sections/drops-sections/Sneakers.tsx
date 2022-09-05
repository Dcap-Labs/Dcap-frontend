import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const Sneakers: FC = () => {
  return (
    <Fragment>
      {ProductData.sivanaSneakers.map((sneaker) => (
        <ProductCard
          key={sneaker.id}
          id={sneaker.id}
          image={sneaker.image}
          video={sneaker.video}
          name={sneaker.name}
          qty={sneaker.qty}
        />
      ))}
    </Fragment>
  );
};
