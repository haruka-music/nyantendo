import React from "react";
import Styles from "../HomePage/home.module.css";
import Image from "next/image";
import HomeImage from "@/public/image/nyantendo/Nyantendo.png";

const home = () => {
  return (
    <>
      <section className={Styles.section}>
        <figure>
          <Image src={HomeImage} width={800} height={400} alt="main" />
          <p>
            WELLCOME TO NYANTENDO
            <br />
            Please take your time.
          </p>
        </figure>
      </section>
      <section className={Styles.section2}>
        <div className={Styles.image}>
          <Image src={headphone} width={150} height={150} alt="headphone" />
        </div>
        <div className={Styles.image}>
          <Image src={FolkGuitar} width={150} height={150} alt="FolkGuitar" />
        </div>
        <div className={Styles.image}>
          <Link className={Styles.link1} to="/Tab">
            <Image src={Tab} width={150} height={150} alt="Tab" />
          </Link>
        </div>
        <div className={Styles.image}>
          <Image src={Event} width={150} height={150} alt="Event" />
        </div>
      </section>
    </>
  );
};

export default home;
