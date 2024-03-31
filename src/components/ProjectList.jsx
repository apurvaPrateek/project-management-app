export default function ProjectList({ projectArray, handleAddProject, handleClick, selectedItem }) {
  return (
    <div className="project-list">
      <div className="side-heading">YOUR PROJECTS</div>
      <button onClick={handleAddProject}>+ Add Project</button>
      <ul>
        {projectArray &&
          projectArray.map((item, index) => {
            return <li key={index}  style={{
                  color: (selectedItem && item.title === selectedItem.title) ? "white" : "grey",
                  cursor: "pointer" // Add pointer cursor for better UX
                }} onClick={handleClick}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
}
