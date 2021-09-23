import React, {Component} from 'react';

class HighScore extends Component{
    render() {
        let count = this.props.count;
        if(this.props.overTen)
            return (
                <div>
                    <p>It's over 10!!! Now the score is {count}</p>


                    <button onClick={this.props.reset}>Reset</button>
                </div>
            );
        return (
            <div>
                <p>You clicked on the button {count} times.</p>
                <button onClick={this.props.countScore}>Click Me</button>
            </div>
        );
    }
}
export default HighScore;