import React, { Component } from "react";
import styles from "./footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer id={styles.footer}>
        <p className={styles.footer__design}>
          Designed and Developed by Paul Seo
        </p>
        <p className={styles.footer__right}>
          <i className="far fa-copyright"></i>
          2021. Paul Seo. All rights reserved.
        </p>
        <div className={styles.footer__link}>
          <a href="https://github.com/taening" target="blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://taening.tistory.com" target="blank">
            <div className={styles.link__logo}></div>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
