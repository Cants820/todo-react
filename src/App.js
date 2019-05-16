import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import AddTask from './components/AddTask';

class App extends Component {
state = {
	tasks : []
}


inputTask = (newTask) => {
	let task = this.state.tasks;
	task.push(newTask);
	this.setState({
		task
	})
}

deleteTask = (idObj) => {
	let currentState = [...this.state.tasks];
	currentState = currentState.filter(function (filtered){
		return filtered.id!==idObj.id 
	})
	// console.log(currentState);
	this.setState({
		tasks: currentState
	})

}


render() {
	let tasks = this.state.tasks.map( task => {
		return <Task key={task.name} id={task.id}  dt={this.deleteTask} name={task.name}  />

	})
  return (

    <div className="main hero">
    	<div className="hero is-info taskapp">
      		<p> Task App</p>
		</div>
    	
    	<div className="title is-1 todotitle">
    	  <h1>To Do List</h1>
    	</div>

      <AddTask inputTask={this.inputTask} />

      {tasks}

    </div>

 	 );
  }
}

export default App;
