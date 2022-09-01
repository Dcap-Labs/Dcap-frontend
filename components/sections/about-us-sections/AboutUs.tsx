import { FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { SectionCard } from "@components/UI";
import styles from "../academy-sections/DcapAcademy.module.scss";

export const AboutUs: FC = () => {
  return (
    <Fragment>
      <SectionCard row="column">
        <div className={styles.academy}>
          <h1>About Us</h1>
          <h4>Introduction</h4>
          <p>
            DCAP is a metaverse aware company creating high quality NFT
            products. Our aim is to build a diverse community who want to
            improve the public image and environmental impact of blockchain
            technology by expanding its use and acceptance. Our company is owned
            and operated by a young and enthusiastic group of artists and
            designers, overseen by an experienced management team to focus their
            talents.
          </p>

          <h4>Our Vision</h4>
          <p>
            We believe in and are part of the decentralisation movement. The
            potential of the disruptive force that allows anyone to take part in
            an open metaverse is boundless. But we are not blind to the inherent
            faults. Challenging the system is not the same as opposing it and we
            want our community to be a part of identifying shortcomings and
            finding practical solutions.
          </p>

          <h4>The DCAP Academy</h4>
          <p>
            Although we offer attractive NFT products that we believe will be
            popular, and are needed to fund our operations, our principal aim is
            to provide information and education for the benefit of those who
            support us by buying our NFTs. Accordingly, we have set up the DCAP
            Academy for this purpose.
          </p>
          <p>
            The Academy is open to anyone who holds any of our NFTs and is about
            helping anyone to expand their knowledge, learn new skills, share
            their ideas, and make new friends and contacts, but it is far more
            than that.
          </p>
          <p>
            Our team pass on their knowledge and experience in a structured and
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

          <h4>The DCAP DAO</h4>
          <p>
            We aim to set up a DAO that will be well-funded by allocating a
            percentage of all NFT sales, having the ability to make investments
            and contributions decided by a vote of the members from a wide
            selection of options. The options will include help for new
            metaverse projects and contributions for the benefit of
            underprivileged societies or to help environmentally beneficial
            projects. The funds will be available to any qualifying project but
            with a particular emphasis on helping less affluent people and
            nations.
          </p>

          <h4>Our Core Values</h4>
          <p>
            In everything we do, we try to remain faithful to our core values.
            This applies through our business ethics to encompass our products
            and what they signify.
          </p>

          <h5>Community</h5>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Building a community with a common purpose and a belief in
            decentralisation
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Setting up an independent DAO with a proportion of the
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            sales from every NFT All this is personified in the DCAP Academy.
          </p>

          <h5>Inclusion</h5>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            A team of co-founders and stakeholders drawn from all over the world
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Committed to training and education of our team
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Open to anyone with a creative idea regardless of background or
            paper qualifications
          </p>

          <h5>Collaboration</h5>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Exchanging ideas with other entities who share our values
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Using our community to help each other develop or fund exceptional
            projects
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Working with others to allow common use of avatars and wearables
            across VR worlds
          </p>

          <h5>Integrity</h5>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Unfettered freedom of use of images for all NFT owners
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Features and benefits not dependent on sales volumes
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Internal ethics committee
          </p>

          <h5>Responsibility</h5>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Supporting socially beneficial projects locally and globally
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Sourcing products from fair wage facilities
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Adopting environmentally responsible principles
          </p>

          <h5>Independence</h5>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            No reliance on any third party
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Free to innovate and experiment
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Willing to share new ideas
          </p>

          <h4>Our Future</h4>
          <p>
            If the recent developments in the crypto world and technology
            generally can teach us anything, it is that nobody can be sure of
            what is going to happen. But for sure things will change rapidly and
            probably in ways that nobody has yet even thought of. We do not look
            at this with trepidation. On the contrary, we embrace it and are
            ready for it. Indeed, we unapologetically expect to be part of
            causing that change and will strive to ensure that the result is
            something better, fairer, and more inclusive.
          </p>
        </div>
      </SectionCard>
    </Fragment>
  );
};
