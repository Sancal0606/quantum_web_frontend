import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>Quantum</div>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
}

export default Navbar;
