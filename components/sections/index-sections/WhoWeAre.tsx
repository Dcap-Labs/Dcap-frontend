import { FC, Fragment } from "react";
import {
  ButtonCard,
  ImageCard,
  SectionCard,
  SectionWidthCard,
} from "@components/UI";

export const WhoWeAre: FC = () => {
  return (
    <Fragment>
      <SectionCard row="row">
        <SectionWidthCard width="41.666667%">
          <h2>WHO WE ARE</h2>
          <p>
            DCAP LABS was founded by a small group who were excited by events in
            the metaverse. We are now more than 20 in a multicultural young
            creative team led by experienced mentors.
          </p>
          <p>
            Our passion is to encourage more people to share our knowledge and
            vision. Through our DCAP Academy, anyone who owns any of our tokens
            can learn from and meet all the team.
          </p>
          <p>
            Join us and help to play an influential part in finding practical
            ways to improve the metaverse, extend its use, and lessen its
            environmental impact.
          </p>
          <ButtonCard>Read More</ButtonCard>
        </SectionWidthCard>
        <SectionWidthCard width="50%">
          <ImageCard
            image="https://dcaplabs.io/assets/front/img/bg-img/Main4.png"
            alt="dcaps home image"
          />
        </SectionWidthCard>
      </SectionCard>
    </Fragment>
  );
};
