import { FC, Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { ProductData } from "./ProductData";

export const TShirts: FC = () => {
  return (
    <Fragment>
      {ProductData.sivanaTShirts.map((TShirt) => (
        <ProductCard
          key={TShirt.id}
          id={TShirt.id}
          image={TShirt.image}
          video={TShirt.video}
          name={TShirt.name}
          qty={TShirt.qty}
        />
      ))}
    </Fragment>
  );
};
