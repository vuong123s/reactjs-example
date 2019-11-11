import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {
    render() {
        const { item } = this.props;
        let className = 'TodoItem';

        if (item.isComplete) {
            className = classNames('TodoItem', 'TodoItem-complete');
        }

        return (
            <div className={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;