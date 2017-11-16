import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

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

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
};

export default ProjectItem;
