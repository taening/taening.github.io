import React, { Component } from "react";
import styles from "./footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer id={styles.footer}>
        <p className={styles.author}>Designed and Developed by Paul Seo</p>
        <p className={styles.copyright}>
          <i className="far fa-copyright"></i>
          2021. Paul Seo. All rights reserved.
        </p>
        <div className={styles.siteLink}>
          <a href="https://github.com/taening" target="blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://taening.tistory.com" target="blank">
            <div className={styles.tistoryLogo}></div>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
