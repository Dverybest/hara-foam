import Image from "next/image";
import styles from "./page.module.css";
import {
  facebook_icon,
  hero_image,
  instagram_icon,
  logo,
  phone_icon,
  whatsapp_icon,
} from "@src/assets";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <nav className={styles.navbar}>
          <Image className={styles.logo} alt="hara-foam-logo" src={logo} />
        </nav>
        <div className={styles.hero}>
          <div className={styles.heroDetailsContainer}>
            <h1 className={`${styles.heroTitle} ${dmSans.className}`}>
              We are Getting Ready to Launch
            </h1>
            <p className={styles.heroSubTitle}>
              Discover the secret to a great night&apos;s sleep with Hara foam.
              Our mattresses are designed to offer unparalleled comfort and
              support, ensuring you wake up feeling refreshed and ready to take
              on the day
            </p>
            <div className={styles.socialsContainer}>
              <span>
                <Image
                  className={styles.socialIcon}
                  src={phone_icon}
                  alt="phone icon"
                />
                <a href="tel:+2348184434444" target={"_blank"}>
                  08184434444,
                </a>
                <a href="tel:+2348174434444" target={"_blank"}>
                  {" "}
                  08174434444
                </a>
              </span>
              <span>
                <Image
                  className={styles.socialIcon}
                  src={whatsapp_icon}
                  alt="instagram icon"
                />
                <a href="tel:+2349022222265" target={"_blank"}>
                  09022222265
                </a>
              </span>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image
              className={styles.heroImage}
              src={hero_image}
              alt="product image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
