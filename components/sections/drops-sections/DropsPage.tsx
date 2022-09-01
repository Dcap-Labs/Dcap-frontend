import { SectionCard } from "@components/UI";
import { FC, Fragment } from "react";

export const DropPage: FC = () => {
  return (
    <Fragment>
      <SectionCard row="row">
        <img
          src="https://dcaplabs.io/assets/front/img/core-img/left.svg"
          alt="left icon"
        />
        <h1>Drops</h1>
        <img
          src="https://dcaplabs.io/assets/front/img/core-img/right.svg"
          alt="right icon"
        />
      </SectionCard>
    </Fragment>
  );
};
