import NoProject from "./NoProject"
import DisplayProject from "./DisplayProject"

export default function SelectedProject({Project, handleAddProject}){
    return (
      <div className="selected-project">
        {Project ? <DisplayProject item={Project} /> : <NoProject onClick={handleAddProject}/>}
      </div>
    )
  }