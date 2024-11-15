import styles from "./style.module.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function HeroOne() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default HeroOne;
