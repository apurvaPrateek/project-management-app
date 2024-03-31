 import image from "../assets/images/no-projects.png";
 
 export default function NoProject({onClick}){
    return(
        <>
            <div className="no-project">
            <img src={image} alt="logo"/>
            <p className="heading">No Project Selected</p>
            <p className="msg">Select a project to get start with a new one</p>
            <button onClick={onClick}>Create New Project</button>
            </div>
        </>
    )
 }