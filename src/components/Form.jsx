import { forwardRef, useRef } from "react";

const Form = forwardRef(function Form({ handleCancel, handleSave }, ref) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  function saveProject() {
    // Access the values from the refs and save them to newProject ref
    ref.current = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value
    };
    // Call the save handler from parent component
    handleSave();
  }

  return (
    <>
      <form>
        <div className="buttons">
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          <button className="save-btn" onClick={saveProject}>Save</button>
        </div>
        <div className="input-group">
          <label>TITLE</label>
          <input type="text" ref={titleRef} />
        </div>

        <div className="input-group">
          <label>DESCRIPTION</label>
          <textarea rows="4" cols="50" ref={descriptionRef} />
        </div>

        <div className="input-group">
          <label>DUE DATE</label>
          <input type="date" ref={dateRef} />
        </div>
      </form>
    </>
  );
});

export default Form;