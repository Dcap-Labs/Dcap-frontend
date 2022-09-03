import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const Hoodies: FC = () => {
  return (
    <Fragment>
      {ProductData.sivanaHoodie.map((hoodie) => (
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
