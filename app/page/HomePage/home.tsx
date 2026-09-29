import React from "react";
import Styles from "../HomePage/home.module.css";
import Image from "next/image";
import { Link } from "react-router-dom";

const HomeImage = "/images/logo/Nyantendo.png";
const nyarby1 = "/images/nyarby/nyarby1.png";
const nyalda = "/images/nyalda/nyalda.png";
const vio = "/images/vio/vio.png";
const craft = "/images/craft/craft.png";
const nyario = "/images/nyario.png";

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
