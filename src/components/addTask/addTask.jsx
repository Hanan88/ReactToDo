import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {
    state = { 
        name: '',
        time: ''
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSumbit= (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            name: '',
            time: ''
        });
    }
    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={this.handleSumbit}>
                    <input type="text" id="name" placeholder="Enter the task..." onChange={this.handleChange} value={this.state.name}/>
                    <input type="text" id="time" placeholder="Enter the time of task..." onChange={this.handleChange} value={this.state.time}/>
                    <input type="submit" value="Add" className="btn"/>
                </form>
            </React.Fragment>
        );
    }
}
 
export default AddTask;