import {
  ButtonCard,
  ImageCard,
  SectionCard,
  SectionWidthCard,
} from "@components/UI";
// import { useMediaQuery } from "@hooks";
import { FC, Fragment } from "react";

export const TheFirstDrop: FC = () => {
  // const isMobile = useMediaQuery(992);

  return (
    <Fragment>
      <SectionCard row="row-reverse">
        <SectionWidthCard width="41.666667%">
          <h2>The First Drop</h2>
          <p>
            Our first project is Sivana, a limited edition NFT fashion outfit
            inspired by artwork symbolising African culture created by graffiti
            artist Chelwek - or Nancy to us - a valued member of our team.
          </p>
          <p>
            Sivana buyers will have rights to IRL garments, VR/AR versions,
            access to the DCAP Academy, and other benefits. They will also help
            to support Nancy in her passion to contribute to her community.
          </p>
          <ButtonCard>Read More</ButtonCard>
        </SectionWidthCard>

        <SectionWidthCard width="41.666667%">
          <ImageCard
            image="https://dcaplabs.io/assets/front/img/bg-img/avatar.gif"
            alt="Sivana avatar"
          />
        </SectionWidthCard>
      </SectionCard>
    </Fragment>
  );
};
