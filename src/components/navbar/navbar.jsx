import styles from './navbar.module.css'
import { Link } from "react-router-dom";

export function Navbar() {

    return (
        <div className={styles.navContainer}>
            <Link className={styles.link} to='/'>My Notes</Link>
            <Link className={styles.link} to='/create'>Create</Link>
        </div>
    );
}