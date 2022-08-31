import { FC, Fragment, ReactNode } from "react";
import { Footer, Header } from "@components";
import { PageCard } from "../components/UI";

export const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <PageCard>
        {children}
        <Footer />
      </PageCard>
    </Fragment>
  );
};

interface LayoutProps {
  children: ReactNode;
}
