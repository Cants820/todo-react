import React, {Component} from 'react';

class AddTask extends Component {
	state = {
		id: '',
		name: ''
	}

	nameChangeHandler = (e) => {
		// alert('hi')
		this.setState({
			name: e.target.value
		})
	}

	submitClickHandler = (e) => {
		e.preventDefault();
		// console.log('YOU ARE ADDING TASKS HERE!')
		this.props.inputTask({
			name: this.state.name
		})
	}

	render(){
		return (
		<div >
			<input className="taskInput input is-rounded is-info" onChange={this.nameChangeHandler} type="text" placeholder="What to do?" />
			<button className="taskButton button is-rounded is-info" onClick={this.submitClickHandler} type="submit"> Add Task</button>
		</div>
		)

	}
	
}

export default AddTask; 
