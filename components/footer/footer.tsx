import type { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faDiscord,
  faTiktok,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

export const Footer: FC<FooterProps> = (props: FooterProps) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <div className={styles.container__row}>
        <div className={styles.container__col}>
          <div className={styles.content}>
            <div className={styles.content__row}>
              <Link href="/">
                <img
                  className={styles.content__img}
                  src="https://dcaplabs.io/assets/front/img/core-img/newlogo.svg"
                  alt="Dcap Logo"
                />
              </Link>
              <Link href="/">
                <h2 className={styles.content__name}>DCAP LABS</h2>
              </Link>
            </div>
            <p>
              DCAP LABS is a trading name of Definite Capital Ltd, a limited
              company registered in England and Wales. Company Number 13263030.
              All logos are registered trademarks of their respective owners.
              All contents of this document, unless otherwise credited, are
              copyright © 2021 DCapLabs.
            </p>
            <p className={styles.header__para}>
              Contact us on our social channels or email the team directly at{" "}
              <Link href="mailto:info@dcaplabs.io">info@dcaplabs.io</Link>
            </p>
          </div>
        </div>
        <div className={styles.container__col}>
          <div className={styles.content}>
            <h6>Quick Links</h6>
            <nav>
              <ul>
                <Link href="/about">
                  <li>About</li>
                </Link>
                <Link href="/drops">
                  <li>Drops</li>
                </Link>
                <Link href="/academy">
                  <li>Academy</li>
                </Link>
                <Link href="#">
                  <li>Sivana</li>
                </Link>
                <Link href="/team">
                  <li>Team</li>
                </Link>
                <Link href="#">
                  <li>Blog</li>
                </Link>
                <Link href="#">
                  <li>White Paper</li>
                </Link>
                <Link href="#">
                  <li>Terms & Conditions</li>
                </Link>
                <Link href="#">
                  <li>Privacy Policy</li>
                </Link>
                <Link href="#">
                  <li>Environmental Policy</li>
                </Link>
              </ul>
            </nav>
            <div className={styles.content__social}>
              <a href="https://twitter.com/dcap_labs/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://twitter.com/dcap_labs/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/dcap_labs/" target="_blank">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                href="https://www.tiktok.com/@dcaplabs?lang=en/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.instagram.com/dcaplabs/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/company/dcapitallabs/mycompany/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/dcap_labs/" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.container__col}>
          <div className={styles.content}>
            <h6>Newsletter</h6>
            <p>Join our mailing list for updates & news!</p>
            <form className={styles.content__form}>
              <input
                className={styles.content__input}
                type="email"
                name="email"
                placeholder="Your Mail"
              />
              <button className={styles.content__btn} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className={styles.copy}>
        Copyright © 2022 All rights reserved | DCap Labs
      </p>
    </div>
  );
};

interface FooterProps {}
