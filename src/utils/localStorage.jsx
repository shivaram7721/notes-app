export function getLocalData() {
    const notes = localStorage.getItem("notes");
    if (notes) {
      try {
        return JSON.parse(notes);
      } catch {
        return [];
      }
    }
    return [];
  }
  
  export function setLocalData(data) {
    localStorage.setItem("notes", JSON.stringify(data));
  }
  