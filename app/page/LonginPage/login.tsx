import React from "react";
import Styles from "@/app/page/LonginPage/Login.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <main className={Styles.page}>
      <header className={Styles.brand} aria-label="Nyantendo">
        <span className={Styles.brandPaw} aria-hidden="true">
          🐾
        </span>
        <span className={Styles.brandName}>NYANTENDO</span>
        <span className={Styles.brandPaw} aria-hidden="true">
          🐾
        </span>
      </header>

      <section className={Styles.panel} aria-labelledby="login-title">
        <h1 className={Styles.welcome} id="login-title">
          ログインして、NYANTENDOの世界へ
        </h1>
        <form className={Styles.form}>
          <div className={Styles.formField}>
            <label className={Styles.label} htmlFor="account">
              ユーザー名/メールアドレス
            </label>
            <div className={Styles.inputWrap}>
              <span className={Styles.inputIcon} aria-hidden="true">
                🐾
              </span>
              <input
                className={Styles.input}
                id="account"
                type="text"
                autoComplete="username"
                name="account"
              />
            </div>
          </div>

          <div className={Styles.formField}>
            <label className={Styles.label} htmlFor="password">
              パスワード
            </label>
            <div className={Styles.inputWrap}>
              <span className={Styles.inputIcon} aria-hidden="true">
                🔑
              </span>
              <input
                className={Styles.input}
                id="password"
                type={passwordVisible ? "text" : "password"}
                autoComplete="current-password"
                name="password"
              />
              <button
                className={Styles.visibilityButton}
                type="button"
                aria-label={
                  passwordVisible ? "パスワードを隠す" : "パスワードを表示"
                }
                aria-pressed={passwordVisible}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "◉" : "⊘"}
              </button>
            </div>
            <p className={Styles.forgotPassword}>パスワードを忘れましたか？</p>
          </div>

          <Link className={Styles.submitButton} to="/home">
            <span aria-hidden="true">🐾</span>
            ログイン
          </Link>
          <div className={Styles.accountLinks}>
            <span>新規登録</span>
            <Link to="/home">ゲストとして利用</Link>
          </div>
        </form>
      </section>

      <footer className={Styles.footer}>
        <div className={Styles.footerMessages}>
          <span className={Styles.onlineDot} aria-hidden="true" />
          <span>みんなのひとこと</span>
          <span className={Styles.messageDivider} aria-hidden="true">
            ·
          </span>
          <span>今日もゆっくりしていってね</span>
        </div>
        <div className={Styles.footerBrand}>
          <span aria-hidden="true">🐾</span> NYANTENDO
        </div>
        <div className={Styles.language}>
          <span aria-hidden="true">◎</span> English{" "}
          <span aria-hidden="true">⌄</span>
        </div>
      </footer>
    </main>
  );
};

export default LoginPage;
