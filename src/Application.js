import {Component} from "react";
import All from './App.css'

class Application extends Component{

    constructor(props) {
        super(props);    
        this.state = {
            count: 2
        };    
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }
    render() {
        let name = "Blessing";
        let greeting = "Hi";
        let {count} = this.state;
        return (
            <section>
                <h1>{greeting},</h1>
                <p>My name is {name}. You clicked the button {count} times</p>
                <span>
                    <button onClick={(e) => this.handleClick()}>
                        Click me
                    </button>
                </span>
            </section>
        );
    }
}

export default Application;