"use client";

import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";
import Styles from "../HomePage/home.module.css";

type Game = {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  href: string;
};

const featuredGames: Game[] = [
  {
    id: "nyarby",
    title: "星のニャービィ",
    image: "/images/nyarby/nyarby1.png",
    description: "大きな冒険が、はじまるニャ！",
    category: "アクション",
    href: "/nyarby",
  },
  {
    id: "nyalda",
    title: "ニャルダの伝説",
    image: "/images/nyalda/nyalda.png",
    description: "勇気あるニャ勇者のはじまりのニャイフ。",
    category: "アドベンチャー",
    href: "#games",
  },
  {
    id: "smash",
    title: "大乱闘スマッシュブラザーズ",
    image: "/images/smash/smash.png",
    description: "ニャたちが集結！みんなで大乱闘。",
    category: "対戦アクション",
    href: "#games",
  },
];

const popularGames: Game[] = [
  {
    id: "nyario",
    title: "ニャリオットハット",
    image: "/images/nyario.png",
    description: "いろんなパワーアップで、冒険をもっと楽しく！",
    category: "プラットフォーム",
    href: "#games",
  },
  {
    id: "vio",
    title: "ニャイオ ハザード",
    image: "/images/vio/vio.png",
    description: "恐怖の街、ミャクーンシティ。",
    category: "サバイバルホラー",
    href: "#games",
  },
  {
    id: "nyarby-puzzle",
    title: "ぷにゃぷにゃ",
    image: "/images/nyarby/nyarby.png",
    description: "つなげて消して！にゃんこぷにゃパズル！",
    category: "パズル",
    href: "/nyarby",
  },
  {
    id: "craft",
    title: "ニャインクラフト",
    image: "/images/craft/craft.png",
    description: "つくろう！冒険しよう！みんなで楽しもう！",
    category: "サンドボックス",
    href: "#games",
  },
];

const HomePage = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  const currentFeature = featuredGames[slideIndex];
  const nextFeatures = [
    featuredGames[(slideIndex + 1) % featuredGames.length],
    featuredGames[(slideIndex + 2) % featuredGames.length],
  ];
  const filteredGames = popularGames.filter((game) =>
    `${game.title} ${game.description} ${game.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  const changeSlide = (direction: number) => {
    setSlideIndex(
      (currentIndex) =>
        (currentIndex + direction + featuredGames.length) %
        featuredGames.length,
    );
  };

  return (
    <main className={Styles.page} id="top">
      <header className={Styles.header}>
        <nav className={Styles.navigation} aria-label="メインナビゲーション">
          <a className={Styles.navLink} href="#top">
            ホーム
          </a>
          <a
            className={`${Styles.navLink} ${Styles.navLinkActive}`}
            href="#games"
          >
            ゲーム
          </a>
          <a className={Styles.navLink} href="#community">
            コミュニティ
          </a>
          <a className={Styles.navLink} href="#support">
            サポート
          </a>
        </nav>
        <label className={Styles.searchBox}>
          <span className={Styles.visuallyHidden}>ゲームを検索</span>
          <input
            type="search"
            placeholder="検索"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <span aria-hidden="true">🐈</span>
        </label>
      </header>

      <div className={Styles.content}>
        <h1 className={Styles.welcome}>
          <span>Nyantendo Switch</span> ゲームコレクションへようこそ！
        </h1>

        <section className={Styles.featured} aria-label="注目のゲーム">
          <button
            className={`${Styles.carouselArrow} ${Styles.carouselArrowLeft}`}
            type="button"
            aria-label="前のゲーム"
            onClick={() => changeSlide(-1)}
          >
            ‹
          </button>

          <article className={Styles.featureLead} key={currentFeature.id}>
            <Image
              className={Styles.featureLeadImage}
              src={currentFeature.image}
              alt={`${currentFeature.title}のパッケージ`}
              fill
              priority
              sizes="(max-width: 700px) 90vw, 42vw"
            />
            <div className={Styles.featureLeadCopy}>
              <span className={Styles.eyebrow}>PICK UP</span>
              <h2>{currentFeature.title}</h2>
              <p>{currentFeature.description}</p>
              <Link className={Styles.detailLink} to={currentFeature.href}>
                詳細を見る <span aria-hidden="true">🐾</span>
              </Link>
            </div>
          </article>

          {nextFeatures.map((game) => (
            <Link
              className={Styles.featureCard}
              key={game.id}
              to={game.href}
              aria-label={`${game.title}の詳細を見る`}
            >
              <Image
                className={Styles.featureCardImage}
                src={game.image}
                alt=""
                fill
                sizes="(max-width: 700px) 44vw, 20vw"
              />
              <span className={Styles.featureCardCaption}>
                <strong>{game.title}</strong>
                <span>{game.description}</span>
              </span>
            </Link>
          ))}

          <button
            className={`${Styles.carouselArrow} ${Styles.carouselArrowRight}`}
            type="button"
            aria-label="次のゲーム"
            onClick={() => changeSlide(1)}
          >
            ›
          </button>
        </section>

        <div className={Styles.carouselControls} aria-label="スライド選択">
          <button
            className={Styles.controlArrow}
            type="button"
            aria-label="前のゲーム"
            onClick={() => changeSlide(-1)}
          >
            «
          </button>
          {featuredGames.map((game, index) => (
            <button
              className={`${Styles.carouselDot} ${index === slideIndex ? Styles.carouselDotActive : ""}`}
              key={game.id}
              type="button"
              aria-label={`${game.title}を表示`}
              aria-current={index === slideIndex ? "true" : undefined}
              onClick={() => setSlideIndex(index)}
            />
          ))}
          <button
            className={Styles.controlArrow}
            type="button"
            aria-label="次のゲーム"
            onClick={() => changeSlide(1)}
          >
            »
          </button>
        </div>

        <section className={Styles.popular} id="games">
          <div className={Styles.sectionHeading}>
            <h2>人気ゲームタイトル</h2>
            <span aria-hidden="true">🐾</span>
          </div>
          {filteredGames.length > 0 ? (
            <div className={Styles.gameGrid}>
              {filteredGames.map((game, index) => (
                <Link className={Styles.gameCard} to={game.href} key={game.id}>
                  <div className={Styles.gameArtwork}>
                    <Image
                      src={game.image}
                      alt={`${game.title}のゲームアート`}
                      fill
                      sizes="(max-width: 600px) 46vw, (max-width: 950px) 46vw, 23vw"
                      priority={index < 2}
                    />
                  </div>
                  <div className={Styles.gameInfo}>
                    <h3>{game.title}</h3>
                    <p>{game.description}</p>
                    <div className={Styles.gameMeta}>
                      <span>{game.category}</span>
                      <span className={Styles.imageCode}>IMAGE-{index}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className={Styles.emptyState}>ゲームが見つかりませんでした。</p>
          )}
        </section>
      </div>

      <footer className={Styles.footer} id="community">
        <a className={Styles.notices} href="#support">
          <strong>お知らせ</strong>
          <span>新機能</span>
        </a>
        <div className={Styles.footerInfo} id="support">
          <span>©2024 Nyantendo Co., Ltd. All rights reserved.</span>
          <span>CERO info　Nyantendo Switchは任天堂の商標です。</span>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
