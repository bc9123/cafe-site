import styles from "../css/Catalogue.module.css";

const Catalogue = () => {
  return (
    <div className={styles.catalogueContainer}>
      <div className={styles.catalogueIntroductionContainer}>
        <h1>Products</h1>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-1.jpg" alt="coffee-1" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-2.jpg" alt="coffee-2" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-3.jpg" alt="coffee-3" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-4.jpg" alt="coffee-4" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-5.jpg" alt="coffee-5" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-6.jpg" alt="coffee-6" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-7.jpg" alt="coffee-7" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/coffee-8.jpg" alt="coffee-8" loading="lazy" />
          </div>
          <h3>Coffee</h3>
        </div>
      </div>
    </div>
  )
}

export default Catalogue