
export default function DisplayProject({ item, handleDelete, handleAddToList, handleClear }) {

  function handleDeleteBtn(event){
    handleDelete(event, item);
  }

  function handleAddTask(event) {
    event.preventDefault();
    const input = document.querySelector(".project-tasks form input");
    if (input && input.value.trim() !== "") {
      handleAddToList(item, input.value);
      // item.taskList.push(input.value);
      input.value = ""; // Clear input field after adding task
    }
  }

  function handleClearBtn(task){
    handleClear(item, task);
    // item.taskList = item.taskList.filter(listItem => listItem != task);
  }

  return (
    <div className="display-project">
      <p className="project-title">{item.title}</p>
      <p className="project-date">{item.date}</p>
      <p className="project-description">{item.description}</p>

      <div className="project-tasks">
        <p>Tasks</p>
        <form onSubmit={handleAddTask}>
          <input type="text" />
          <button>Add Task</button>
        </form>

        <ul>
          {item.taskList.map((task, index) => (

              <li key={index}>{task}
              <button key={index} onClick={() => handleClearBtn(task)}>Clear</button>
              </li>
            
          ))}
        </ul>
      </div>

      <button id="delete-btn" onClick={handleDeleteBtn}>Delete</button>
    </div>
  );
}
