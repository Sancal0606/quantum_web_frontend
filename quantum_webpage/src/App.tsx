import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import MasterPlan from "./components/master-plan/MasterPlan";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <MasterPlan />
    </div>
  );
}

export default App;
