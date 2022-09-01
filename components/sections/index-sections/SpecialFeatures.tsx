import { SectionCard, SectionWidthCard } from "@components/UI";
import { FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import styles from "./SpecialFeatures.module.scss";

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
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Free access to the DCAP Academy
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Voting rights in our DAO
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            The right to forge a physical IRL set of the garments within six
            months made from high quality, sustainable materials and
            manufactured in ethical facilities.
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            VR and AR versions for use in compatible environments.
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Direct access to our team of co-founders through the DCAP Academy.
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            Eligibility for giveaways.
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <span>Priority allocations for coming NFT offers.</span>
          </p>
          <p className={styles.list}>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <span>VIP passes to events and presentations.</span>
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <span>Delivery of these benefits is not reliant on a sell-out</span>
          </p>
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
