import { FC, Fragment } from "react";
import {
  ButtonCard,
  ImageCard,
  SectionCard,
  SectionWidthCard,
} from "@components/UI";

export const DcapGameOne: FC = () => {
  return (
    <Fragment>
      <SectionCard row="column">
        <h2>DCAP GAME ONE V1</h2>
      </SectionCard>
      <SectionCard row="row">
        <SectionWidthCard width="41.666667%">
          <h2>PLAY AND WIN A FREE SIVANA NFT</h2>
          <p>
            Play our game just for fun for now, but we will shortly be starting
            a competition where you can win a free Sivana NFT. Keep watching for
            details! The game shows Nancy tackling an obstacle course and
            meeting other members of our team as she goes on her way.
          </p>

          <p>Beta version - Deskstop only.</p>
          <ButtonCard>Play Game</ButtonCard>
        </SectionWidthCard>
        <SectionWidthCard width="50%">
          <ImageCard
            image="https://dcaplabs.io/assets/front/img/bg-img/Game.gif"
            alt="dcaps game V1"
          />
        </SectionWidthCard>
      </SectionCard>
    </Fragment>
  );
};
