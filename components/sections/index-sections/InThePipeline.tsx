import { FC, Fragment } from "react";
import {
  ButtonCard,
  ImageCard,
  SectionCard,
  SectionWidthCard,
} from "@components/UI";

export const InThePipeline: FC = () => {
  return (
    <Fragment>
      <SectionCard row="column">
        <h2 style={{ textAlign: "center" }}>
          <span>
            In The <br />
          </span>
          Pipeline
        </h2>
      </SectionCard>
      <SectionCard row="row">
        <SectionWidthCard width="41.666667%">
          <p>
            Here is a sneak preview of just one of our other projects under
            development for release in the autumn.
          </p>

          <p>
            We have plenty of other projects in the pipeline and not just for
            NFTs! Read our White Paper if you want to know more and watch out
            here for further updates.
          </p>
          <ButtonCard>Play Game</ButtonCard>
        </SectionWidthCard>
        <SectionWidthCard width="50%">
          <ImageCard
            image="https://dcaplabs.io/assets/front/img/bg-img/cadets.gif"
            alt="dcaps in the pipeline"
          />
        </SectionWidthCard>
      </SectionCard>
    </Fragment>
  );
};
