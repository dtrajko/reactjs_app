import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class TodoItem extends Component {

    render() {
        return (
          <li className="Todo">
            {this.props.todo.title}
          </li>
        );
    }
};

TodoItem.propTypes = {
    project: PropTypes.object
};

export default TodoItem;
