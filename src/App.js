import React, {Component} from 'react';
import './App.css';
import HighScore from './HighScore';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        };
    }
    componentDidUpdate(props, state) {
        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
            console.log("Clicked upto 10!");
            this.setState({overTen: true});
        }
    }

    handleClicks = () => {
        return this.setState({count: this.state.count + 1})
    }

    resetData = () => {
        this.setState({
            count: 0,
            overTen: false
        });
    }

    render() {
        let {count} = this.state;
        return (
            <div>
                <h1>Main Counter </h1>
                <HighScore countScore={(e) => this.handleClicks()} reset={(e) => this.resetData()} count={count} overTen={this.state.overTen} />
                <p><small>- Blessing Ajala, Software Engineer</small></p>
            </div>
        );
    }
}
export default App;