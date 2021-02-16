import React, { Component } from 'react';
import Tasks from './components/tasks/task';
import AddTask from './components/addTask/addTask';

class App extends Component {
    state = { 
        tasks: [
            {id: 1, name: "React Course", time: 2},
            {id: 2, name: "Vue Course", time: 3},
            {id: 3, name: "PHP Course", time: 7}
        ]
    }

    deleteTask= (id) => { //1
        console.log(id);

        let tasks= this.state.tasks.filter(task => {
            return task.id !== id
        });

        this.setState({tasks});


        // let i = tasks.findIndex(task => task.id === id);
        // tasks.splice(i,1);
        // this.setState({tasks});

    }

    addTask= (task) => {
        task.id= Math.random();
        let tasks= this.state.tasks;
        tasks.push(task);
        this.setState({tasks})
    }


    render() { 
        return ( 
            <React.Fragment>
                <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
                <AddTask addTask={this.addTask}/>
            </React.Fragment>
         );
    }
}
 
export default App;


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