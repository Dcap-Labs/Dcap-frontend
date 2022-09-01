import { FC, Fragment } from "react";
import { SectionCard } from "@components/UI";
import styles from "./DcapAcademy.module.scss";

export const DcapAcademy: FC = () => {
  return (
    <Fragment>
      <SectionCard row="column">
        <div className={styles.academy}>
          <h1>The Dcap Academy</h1>
          <p>
            The DCAP Academy brings a completely new dimension to utilities and
            radically transforms what it means to have a “community” built
            around ownership of an NFT. These are bold claims, but we have the
            skills and experience back them up.
          </p>
          <p>
            The DCAP Academy is open to anyone who holds any of our NFTs and is
            about helping anyone to expand their knowledge, learn new skills,
            share their ideas, and make new friends and contacts, but it is far
            more than that.
          </p>
          <p>
            Our team of more than 20 highly qualified and skilled founders are
            here to pass on their knowledge and experience in a structured and
            friendly environment. All this knowledge and experience can be
            freely accessed directly through the Academy. Participants are also
            encouraged to present or lead events on their own specialities if
            they would like to.
          </p>
          <p>
            Perhaps most important of all, there will be opportunities to
            collaborate in special projects, obtain sponsorship for education or
            business start-ups, join us in partnerships, or even join us in the
            team as a stakeholder.
          </p>
          <p>
            Topics that will be covered include blockchains and decentralisation
            and how these impinge on the Metaverse, crypto, and Web 3. Other
            subjects will be tackled having general appeal or interest to keep
            the atmosphere innovative, fresh and interesting. We welcome
            suggestions from anyone who would like to know about any topic they
            are interested in.
          </p>
          <p>
            Seminars and workshops about a wide variety of topics of importance
            will be organised to help in achieving professional and personal
            ambitions. The sessions will be fun as well as informative and there
            will be opportunity to meet up with our team to just chat and
            exchange ideas.
          </p>
          <p>
            All capabilities and levels will be catered for. For those with only
            a basic knowledge, there will be sessions giving clear and simple
            explanations. In line with our core values, we will make the
            sessions inclusive, collaborative, and responsible and encourage
            independence, ethics and community contribution. At a higher level,
            there will be more advanced sessions with our own team or guest
            speakers.
          </p>
          <p>
            A monthly schedule of events will be published for those who want to
            attend live, but they will all be recorded and can be accessed
            through our website at any time.
          </p>
          <p>
            If you want to be among the first to be a part of something
            progressive and meaningful that has multiple layers and huge
            opportunities for those willing to put in the effort, you can DM us
            for a place on our Sivana whitelist.
          </p>
        </div>
      </SectionCard>
    </Fragment>
  );
};
