import { Link } from "react-router-dom";
import styles from "../css/NavBar.module.css";
import { useEffect, useState } from "react";

const NavBar = ({ onHomePage }: { onHomePage: boolean }) => {
  const [onMobile, setOnMobile] = useState(false);
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOnMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = IsMenuOpen ? "hidden" : "auto";
  }, [IsMenuOpen]);  

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className={styles.navBarContainer}>
      {onHomePage ? (
        <header className={styles.headerHome}>
          <nav>
            <h1>Coffee</h1>
            {onMobile && (
            <button
              className={`${styles.hamburger} ${
                IsMenuOpen ? `${styles.active}` : ""
                }`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
            )}
            <ul
              className={`${styles.navLinks} ${
                onMobile ? styles.mobile : ""
                } ${
                onMobile && IsMenuOpen ? `${styles.active}` : ""
                }`}
            >
              <li><Link to={"/"} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to={"/catalogue"} onClick={() => setIsMenuOpen(false)}>Catalogue</Link></li>
              <li><Link to={"/about"} onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
          <div className={styles.headerHomeContentContainer}>
            <h2>Welcome</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolorum?</p>
            <Link to={"/contact"}>Get in contact &gt;</Link>
          </div>
        </header>
      ) : (
        <header className={styles.headerNormal}>
          <nav>
            <h1>Coffee</h1>
            {onMobile && (
            <button
              className={`${styles.hamburger} ${
                IsMenuOpen ? `${styles.active}` : ""
                }`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
            )}
            <ul
              className={`${styles.navLinks} ${
                onMobile ? styles.mobile : ""
                } ${
                onMobile && IsMenuOpen ? `${styles.active}` : ""
                }`}
            >
              <li><Link to={"/"} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to={"/catalogue"} onClick={() => setIsMenuOpen(false)}>Catalogue</Link></li>
              <li><Link to={"/about"} onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </header>
      )}
    </div>
  );
};

export default NavBar;
