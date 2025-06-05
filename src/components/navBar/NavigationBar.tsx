import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className={styles.navbar}>
            <h2 className={styles.logo} style={{ color: "white", fontSize: "2.5rem" }}>GitHub Dashboard</h2>
            <div className={styles.btn}>
                <div className={styles.item}>
                    <Link to="/">Home</Link>
                </div>
                <div className={styles.item}>
                    <Link to="/favorite">Favourite</Link>
                </div>
            </div>

        </div>
    );
}

export default NavigationBar;