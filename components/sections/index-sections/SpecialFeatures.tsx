import { SectionCard, SectionWidthCard } from "@components/UI";
import { FC, Fragment } from "react";

export const SpecialFeatures: FC = () => {
  return (
    <Fragment>
      <SectionCard row="column">
        <SectionWidthCard width="100%">
          <h2>SPECIAL FEATURES</h2>
        </SectionWidthCard>
        <SectionWidthCard width="100%">
          <p>
            Owners of Sivana NFTs will have unfettered commercial rights to use
            the images for their own purposes and will enjoy all the following
            additional benefits:
          </p>
          <p>{/* <FontAwesomeIcon icon={faGem} /> */}</p>
          <p>
            Organic growth and meaningful engagement with our community and
            friends is our top priority. We are here for the long haul, and we
            know this means building trust. We only make promises we can keep
            and when we make a promise, you can rely on it.
          </p>
        </SectionWidthCard>
      </SectionCard>
    </Fragment>
  );
};
