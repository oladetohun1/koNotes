import { MdDeleteForever } from "react-icons/md";
function Notes() {
  return (
    <div className="note">
      <span>This contans the notes</span>
      <div className="note-footer">
        <small>date</small>
        <MdDeleteForever className="delete-icon" size={1.3} />
      </div>
    </div>
  );
}

export default Notes;
