export default function ProjectList({ projectArray, handleAddProject, selectedItem, handleClick }) {
  return (
    <div className="project-list">
      <div className="side-heading">YOUR PROJECTS</div>
      <button onClick={handleAddProject}>+ Add Project</button>
      <ul>
        {projectArray &&
          projectArray.map((item, index) => {
            return <li key={index} style={{color: (selectedItem ? "white": "grey")}} onClick={handleClick}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
}
