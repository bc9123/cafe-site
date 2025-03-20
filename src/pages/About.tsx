import { Link } from "react-router-dom";
import styles from "../css/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.introductionContainer}>
        <h1>About Us</h1>
      </div>
      <section className={styles.section1Container}>
        <div className={styles.section1LeftContainer}>
          <img src="/assets/images/about-section1-image.jpg" alt="" loading="lazy" />
        </div>
        <div className={styles.section1RightContainer}>
          <h2>Lorem ipsum dolor sit.</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos impedit quaerat obcaecati laborum iure corporis, quas minima magnam rerum quos.</p>
        </div>
      </section>
      <section className={styles.section2Container}>
        <div className={styles.section2LeftContainer}>
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, repellat!</p>
        </div>
        <div className={styles.section2RightContainer}>
          <div className={styles.section2Right1}>
            <h1>10+</h1>
            <h6>Lorem, ipsum.</h6>
          </div>
          <div className={styles.section2Right2}>
            <h1>100+</h1>
            <h6>Lorem, ipsum.</h6>
          </div>
          <div className={styles.section2Right3}>
            <h1>30+</h1>
            <h6>Lorem, ipsum.</h6>
          </div>
          <div className={styles.section2Right4}>
            <h1>20+</h1>
            <h6>Lorem, ipsum.</h6>
          </div>
        </div>
      </section>
      <section className={styles.section3Container}>
        <h1>Lorem, ipsum.</h1>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, id?</h3>
        <Link to={"/contact"}>Contact us</Link>
      </section>
    </div>
  )
}

export default About