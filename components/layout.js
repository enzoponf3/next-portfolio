import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import Link from "next/link";

import profilePic from "/public/images/profile.png";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/icons/favicon.svg" />

        <meta name="twitter:site" content="@enzoponf3" />
        <meta name="twitter:creator" content="@enzoponf3" />
        <meta
          name="og:description"
          content="Enzo Ponferrada personal portfolio. Take a look to my projects and contact me to create your web or application."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ponfe/image/upload/v1633479680/images/logo_axbkk5.svg"
        />
        <meta name="og:title" content="Enzo Ponferrada | Web Developer" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className={styles.nav}>
        <div className="container">
          <a href="https://enzoponferrada.com.ar" target="_blank" tabIndex="0">
            <Image
              src="/images/icons/logo.svg"
              alt="Enzo Ponferrada"
              width={36}
              height={36}
            />
          </a>
          <ul>
            <li>
              <Link href="#home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link scroll href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header id="home" className={styles.header}>
        <div className={`container ${styles.presentation}`}>
          <div className={styles.profilePic}>
            <Image
              layout="responsive"
              priority
              src={profilePic}
              alt="developer profile pic"
              placeholder="blur"
            />
          </div>
          <div>
            <p>Hi! 👋</p>
            <p> I'm Enzo Ponferrada</p>
            <h1>Web Developer</h1>
            <p>based in Buenos Aires, Argentina.</p>
            <p>
              I craft web pages and applications to be your window to the world!
            </p>
            <div className={styles.social}>
              <a
                href="https://linkedin.com/in/enzo-ponferrada"
                target="_blank"
                tabIndex="0"
              >
                <Image
                  src="/images/icons/linkedin.svg"
                  alt="linkedin"
                  width={48}
                  height={48}
                />
                LinkedIn
              </a>
              <a
                href="https://github.com/enzoponf3"
                target="_blank"
                tabIndex="0"
              >
                <Image
                  src="/images/icons/github.svg"
                  alt="Gitb Hub"
                  width={48}
                  height={48}
                />
                Git Hub
              </a>
            </div>
            <div className={styles.explore}>
              <span>Check out my projects!</span>
              <i className={styles.arrowIcon}> &#x27A1;</i>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
