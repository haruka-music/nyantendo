import React from "react";
import Styles from "../HomePage/home.module.css";
import Image from "next/image";
import HomeImage from "@/public/image/nyantendo/Nyantendo.png";
import nyarby1 from "@/public/image/nyantendo/nyarby1.png";
import nyalda from "@/public/image/nyantendo/nyalda.png";
import vio from "@/public/image/nyantendo/vio.png";
import craft from "@/public/image/nyantendo/craft.png";
import nyario from "@/public/image/nyantendo/nyario.png";
import { Link } from "react-router-dom";

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
          <Link className={Styles.link1} to="/nyarby">
            <Image src={nyarby1} width={150} height={150} alt="nyarby" />
          </Link>
        </div>
        <div className={Styles.image}>
          <Image src={nyalda} width={150} height={150} alt="nyalda" />
        </div>
        <div className={Styles.image}>
          <Image src={vio} width={150} height={150} alt="vio" />
        </div>
        <div className={Styles.image}>
          <Image src={craft} width={150} height={150} alt="craft" />
        </div>
        <div className={Styles.image}>
          <Image src={nyario} width={150} height={150} alt="nyario" />
        </div>
      </section>
    </>
  );
};

export default home;
