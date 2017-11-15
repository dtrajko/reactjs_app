import React, { Component } from 'react';

class ProjectItem extends Component {
       
    deleteProject(id) {
        this.props.onDelete(id);
    }
    
    render() {
        return (
          <li className="Project">
            <strong>[ UUID: {this.props.project.id} ] </strong>
            <strong>{this.props.project.title}</strong>: 
            {this.props.project.category} 
            &nbsp;[<a href="#delete" 
            onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>]
          </li>
        );
    }
};

export default ProjectItem;
