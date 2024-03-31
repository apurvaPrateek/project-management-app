import React, { useState, useRef } from "react";
import ProjectList from "./components/ProjectList";
import SelectedProject from "./components/SelectedProject";
import Form from "./components/Form";
import projectArray from "./assets/projectItems";
import DisplayProject from "./components/DisplayProject";

export default function App() {
  const [projectItems, setProjectItems] = useState([...projectArray]);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayProject, setDisplayProject] = useState(null);
  const [addProject, setAddProject] = useState(true);
  const newProject = useRef();

  function handleAddProject() {
    setDisplayForm(true);
    setAddProject(false);
    setDisplayProject(null); // Ensure displayProject is reset
  }

  function handleCancel() {
    setDisplayForm(false);
    setAddProject(true);
    setDisplayProject(null);
  }

  function handleSave() {
    setProjectItems((prev) => [
      ...prev,
      {
        title: newProject.current.title,
        description: newProject.current.description,
        date: newProject.current.date,
        taskList: [],
      },
    ]);

    setDisplayForm(false);
    setAddProject(true);
    setDisplayProject(null);
  }

  function handleDisplayProject(projectName) {
    const item = projectItems.find((item) => item.title === projectName);
    setDisplayProject(item);
    setDisplayForm(false);
    setAddProject(false);
  }

  function handleDelete(event, item) {
    setProjectItems((prev) =>
      prev.filter((projectItem) => projectItem !== item)
    );

    setDisplayForm(false);
    setAddProject(true);
    setDisplayProject(null);
  }

  function handleAddToList(item, listItem) {
    const updatedItem = {
      ...item,
      taskList: [...item.taskList, listItem],
    };
  
    setProjectItems((prevProjectItems) =>
      prevProjectItems.map((projectItem) =>
        projectItem === item ? updatedItem : projectItem
      )
    );

    setDisplayProject(updatedItem);
  }
  
  function handleClear(item, task) {
    let updatedProjectItems = projectItems.map((projectItem)=>{
      if(projectItem === item) return {...projectItem, taskList: projectItem.taskList.filter((temp)=>temp!==task)}
      else return projectItem;
    })
    // setProjectItems((prevProjectItems) =>
    //   prevProjectItems.map((projectItem) =>
    //     projectItem === item
    //       ? { ...projectItem, taskList: projectItem.taskList.filter((temp) => temp !== task) }
    //       : projectItem
    //   )
    // );
    setProjectItems(updatedProjectItems);

    setDisplayProject(updatedProjectItems.find(projectItem => projectItem.title === item.title));
  }

  
  return (
    <>
      <ProjectList
        handleAddProject={handleAddProject}
        projectArray={projectItems}
        handleClick={(event) => handleDisplayProject(event.target.innerHTML)}
        selectedItem={displayProject}
      />
      <div className="hero">
        {displayForm && (
          <Form
            handleCancel={handleCancel}
            handleSave={handleSave}
            ref={newProject}
          />
        )}
        {addProject && <SelectedProject handleAddProject={handleAddProject} />}
        {displayProject && (
          <DisplayProject
            item={displayProject}
            handleDelete={handleDelete}
            handleAddToList={handleAddToList}
            handleClear={handleClear}
          />
        )}
      </div>
    </>
  );
}
