import React from "react";
import Image from "next/image";
import Styles from "../NyarbyPage/nyarby.module.css";

const nyarby = () => {
  return (
    <>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <Image
            src="/images/nyarby/nyarby.png"
            width={800}
            height={400}
            alt="nyarby"
          />
          <p className={Styles.discription}>
            <h1 className={Styles.h1}>星のニャービィ</h1>
          </p>
        </article>
      </section>
    </>
  );
};

export default nyarby;
