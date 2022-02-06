import React, { Component } from "react";
import styles from "./home.module.css";

import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id={styles.home}>
          <div className={styles.containers}>
            <div className={styles.container1}>
              <div className={styles.left}>
                <h1>
                  Hi There! 👋🏻
                  <br />
                  I'M PAUL SEO
                </h1>
                <h2>FRONT-END DEVELOPER</h2>
              </div>
              <div className={styles.right}>
                <div className={styles.avatar}></div>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.left}>
                <div className={styles.profile}></div>
              </div>
              <div className={styles.right}>
                <h1>Let Me Introduce My Self!</h1>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Home;
