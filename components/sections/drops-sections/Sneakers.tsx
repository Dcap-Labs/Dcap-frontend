import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const Sneakers: FC = () => {
  return (
    <Fragment>
      {ProductData.sivanaSneakers.map((hoodie) => (
        <ProductCard
          bg={hoodie.bg}
          url={hoodie.url}
          name={hoodie.name}
          qty={hoodie.qty}
        />
      ))}
    </Fragment>
  );
};
