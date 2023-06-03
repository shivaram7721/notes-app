import { useState } from "react";
import styles from "./create.module.css";
import { Notes } from "../notes/notes";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../../slice/notesSlice";
import { getLocalData, setLocalData } from "../../utils/localStorage";

export function Create() {

  const note = useSelector(state=>state.notes);
  const dispatch = useDispatch()

  const notes = getLocalData();

  let timeStamp = new Date().toLocaleString();

  const [input, setInput] = useState('')      
  const [title, setTitle] = useState('')

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleClick() {
    if(input) {
      const newNote = {
        id: Date.now(),
        title: title,
        text: input,
        date: timeStamp
    }
      dispatch(createNote(newNote))
      setLocalData([...note, newNote])
      setInput('')
      setTitle('')
    }
  }

  return (
    <div className={styles.createContainer}>
      {/* <div className={styles.linkContainer}>
        <Link className={styles.link} to="/create/delete">Delete</Link>
        <Link className={styles.link} to="/create/edit">edit</Link>
      </div> */}

      <div className={styles.createContainer}>
        <div className={styles.textContainer}>
          <input className={styles.titleInp} value={title} onChange={handleTitle} type='text' placeholder="Enter the title..."/>
          <textarea 
            className={styles.textarea}
            rows="8"
            cols="30"
            value={input}
            placeholder="Enter your notes..."
            onChange={handleChange}
          ></textarea>
          <button className={styles.btn} onClick={handleClick}>Add Note</button>
        </div>
      </div>

      {notes.length === 0 ? '' : <h1 className={styles.btnCheck}>Checkout your notes..</h1>}

      <Notes />
    </div>
  );
}
