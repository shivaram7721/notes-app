import styles from "./header.module.css";
import { Notes } from "../notes/notes";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getLocalData } from "../../utils/localStorage";

export function Header() {

  // const note = useSelector(state=>state.notes)
  // console.log(note)
  const notes = getLocalData();

  const navigate = useNavigate();

  function handleAdd() {
    navigate("./create");
  }

  return (
    <div className={styles.list}>
      {notes.length === 0 ? (
        <h1 className={styles.routeAdd}>
          Click to add Notes{" "}
          <span className={styles.createBtn} onClick={handleAdd}>
            ➕
          </span>
        </h1>
      ) : (
        <Notes />
      )}
    </div>
  );
}
