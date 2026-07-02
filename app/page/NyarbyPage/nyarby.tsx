import React from "react";
import Image from "next/image";
import Styles from "../NyarbyPage/nyarby.module.css";
import nyarby1 from "@/public/image/nyantendo/nyarby.png";

const nyarby = () => {
  return (
    <>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <Image src={nyarby1} width={800} height={400} alt="nyarby" />
          <p className={Styles.discription}>
            <h1 className={Styles.h1}>星のニャービィ</h1>
          </p>
        </article>
      </section>
    </>
  );
};

export default nyarby;
