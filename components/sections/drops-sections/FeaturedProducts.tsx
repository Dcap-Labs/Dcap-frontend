import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const FeaturedProducts: FC = () => {
  return (
    <Fragment>
      <ProductCard
        id={ProductData.sivanaHoodie[1].id}
        image={ProductData.sivanaHoodie[1].image}
        video={ProductData.sivanaHoodie[1].video}
        name={ProductData.sivanaHoodie[1].name}
        qty={ProductData.sivanaHoodie[1].qty}
      />
      <ProductCard
        id={ProductData.sivanaSneakers[1].id}
        image={ProductData.sivanaSneakers[1].image}
        video={ProductData.sivanaSneakers[1].video}
        name={ProductData.sivanaSneakers[1].name}
        qty={ProductData.sivanaSneakers[1].qty}
      />
      <ProductCard
        id={ProductData.sivanaTShirts[1].id}
        image={ProductData.sivanaTShirts[1].image}
        video={ProductData.sivanaTShirts[1].video}
        name={ProductData.sivanaTShirts[1].name}
        qty={ProductData.sivanaTShirts[1].qty}
      />
    </Fragment>
  );
};
