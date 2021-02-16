import React from 'react';
import './task.css';

const Tasks = (props) => {
    const {tasks, deleteTask}= props;
    const length= tasks.length;

    const ListTask= length ?  tasks.map(task => {
        return(
            <div key={task.id} className="bodyList" >
                <div className="body-name">{task.name}</div>
                <div className="body-time">{task.time}</div>
                <div onClick={() => deleteTask(task.id)} className="body-delete"><i className="bi bi-trash"></i></div>
            </div>
        )
    }) :
    <h3>You Have No Tasks</h3>
    return ( 
        <React.Fragment>
            <div className="headList">
                <div className="head-name">Task Name</div>
                <div className="head-time">Task Time</div>
                <div className="head-delete">Delete</div>
            </div>
            {ListTask}
        </React.Fragment>
     );
}
 
export default Tasks;

// <table className=" table table-dark table-striped">
// <thead>
//     <tr>
//     <th scope="col">Task Number</th>
//     <th scope="col">Task Name</th>
//     <th scope="col">Time</th>
//     </tr>
// </thead>
// <tbody>
//     <tr>
//     <th>{this.state.id}</th>
//     <td>{this.state.name}</td>
//     <td>{this.state.time}</td>
//     </tr>
// </tbody>
// </table>