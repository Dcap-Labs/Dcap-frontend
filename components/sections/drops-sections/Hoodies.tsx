import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const Hoodies: FC = () => {
  return (
    <Fragment>
      {ProductData.sivanaHoodie.map((hoodie) => (
        <ProductCard
          key={hoodie.id}
          id={hoodie.id}
          image={hoodie.image}
          video={hoodie.video}
          name={hoodie.name}
          qty={hoodie.qty}
        />
      ))}
    </Fragment>
  );
};
