import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const FeaturedProducts: FC = () => {
  return (
    <Fragment>
      <ProductCard
        bg={ProductData.sivanaHoodie[1].bg}
        url={ProductData.sivanaHoodie[1].url}
        name={ProductData.sivanaHoodie[1].name}
        qty={ProductData.sivanaHoodie[1].qty}
      />
      <ProductCard
        bg={ProductData.sivanaSneakers[1].bg}
        url={ProductData.sivanaSneakers[1].url}
        name={ProductData.sivanaSneakers[1].name}
        qty={ProductData.sivanaSneakers[1].qty}
      />
      <ProductCard
        bg={ProductData.sivanaTShirts[1].bg}
        url={ProductData.sivanaTShirts[1].url}
        name={ProductData.sivanaTShirts[1].name}
        qty={ProductData.sivanaTShirts[1].qty}
      />
    </Fragment>
  );
};
