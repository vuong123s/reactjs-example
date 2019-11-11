import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
    constructor() {
        super();
        this.TodoItems = [
            'Mua bim bim',
            'Đi đá bóng',
            'Đi đổ xăng'
        ];
    }
    render() {
        return (
            <div className="App">
                {
                    this.TodoItems.map((item, index) => {
                        return <TodoItem key={index} title={item} />
                    })
                }
            </div>
        );
    }
}

export default App;
