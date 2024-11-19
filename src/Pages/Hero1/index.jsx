import styles from "./style.module.css";
import Container from "../../Components/Container";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function HeroOne() {
  return (
    <Container variant={styles.container}>
      <Navbar />
      <Hero />
      <Footer />
    </Container>
  );
}

export default HeroOne;
