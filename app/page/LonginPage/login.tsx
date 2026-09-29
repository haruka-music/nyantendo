import React from "react";
import Styles from "@/app/page/LonginPage/Login.module.css";
import Image from "next/image";
import { Link } from "react-router-dom";

const Login = "/images/longin/login.png";

const LoginPage = () => {
  return (
    <div className={Styles.formContainer}>
      <Image src={Login} width={800} height={400} alt="main" />
      <form className={Styles.form}>
        <h1 className={Styles.h1}>ログインフォーム</h1>
        <hr />
        <div className={Styles.uiForm}>
          <div className={Styles.formField}>
            <label className={Styles.label}>Name</label>
            <input type="text" placeholder="ユーザー名" name="username" />
          </div>
          <div className={Styles.formField}>
            <label className={Styles.label}>Email</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
            />
          </div>
          <div className={Styles.formField}>
            <label className={Styles.label}>Password</label>
            <input type="text" placeholder="パスワード" name="password" />
          </div>
          <button className={Styles.submitButton}>
            <Link className={Styles.a} to="Home">
              <a>ログイン</a>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
