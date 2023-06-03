import styles from "./notes.module.css";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
// import { notesApp } from "../atoms/atoms";
// import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSelector, useDispatch } from "react-redux";
import { removeNote, updateNote } from "../../slice/notesSlice";
import { getLocalData, setLocalData } from "../../utils/localStorage";

export function Notes() {

  const note = useSelector(state=>state.notes)
  const dispatch = useDispatch();

  let myNotes = getLocalData();
  console.log(myNotes)

  function handleDelete(notes) {
    dispatch(removeNote(notes))
    setLocalData(note)
  }

  function handleEdit(note) {
    let updatedNote = {
      id: note.id,
      title: prompt("Enter updated title", note.title),
      text: prompt("Enter updated text", note.text),
      date: note.date,
    };
    dispatch(updateNote(updatedNote))
    setLocalData(note)
  }

  return (
    <div className={styles.container}>
        
      <div className={styles.notesMain}>
        {myNotes &&
          myNotes.map((note, index) => (
            <div className={styles.notesContainer} key={note.id}>
              <div>
                <span className={styles.title} key={note.id}>
                  {note.title}
                </span>
              </div>

              <span className={styles.notesContent} key={note.id}>
                {note.text}
              </span>
              <div className={styles.notesFoot}>
                <div>
                  <span className={styles.date}>{note.date}</span>
                </div>

                <div className={styles.notesFormat}>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(note)}
                  >
                    <MdDelete />
                  </span>
                  <span
                    className={styles.edit}
                    onClick={() => handleEdit(note, index)}
                  >
                    <AiTwotoneEdit />
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
}
