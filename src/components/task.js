import React, {Component} from 'react';

class Task extends Component  {

	deleteClickHandler = (e) => {
		e.target.parentNode.remove();
	}


	render(){
		return (
		<div className="todo card">
					<p className="tasks ">{this.props.name}</p>
					<button className="delete is-medium delete-btn" data-id={this.props.name} onClick={this.deleteClickHandler}></button>
		</div>
		)
	}
}

export default Task; 
