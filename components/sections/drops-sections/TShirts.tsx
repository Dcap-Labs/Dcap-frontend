import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const TShirts: FC = () => {
  return (
    <Fragment>
      {ProductData.sivanaTShirts.map((TShirt) => (
        <ProductCard
          bg={TShirt.bg}
          url={TShirt.url}
          name={TShirt.name}
          qty={TShirt.qty}
        />
      ))}
    </Fragment>
  );
};
