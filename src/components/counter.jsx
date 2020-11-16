import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        //count: this.props.value, //this state prop comes from counters Component so fetch it from constructor()
        // imageUrl: 'https://picsum.photos/200'
        tags: ['tag1','tag2','tag3']
    };

    styles = {
        fontSize: 12, //use camel case notation to name css properties, Babel will compile it to font-size: 12px
        fontWeight: 'Bold'
    }

    //constructor(props) {
        //super(props); // calling constructor of parent class Component
        //this.handleIncrement = this.handleIncrement.bind(this); 
        // binding event handler 'handleIncrement', it will create new instance of
        // function 'handleIncrement', so 'this' can be accessed from handleIncrement()
        
        // this.state = {
        //     count: this.props.counter.value
        // }
        //Note: props are read-only, we cannot change the state of another component
    // }

    render() {
        console.log("this.props:: ",this.props);

        return (
            <div>
                {/* <h4>Counter #{this.props.id}</h4> */}
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span> {/* do JS code inside */}
                {/* adding bootstrap classes as css classes inside className */}
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                        Increment
                </button>

                {/* raising event 'onDelete' to handle the event 'handleDelete'*/}
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">
                        Delete
                </button>
                {/* <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul> */}
            </div> //JSX needs to have one parent element so it's essential to wrap the HTML elements with <div> or <React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
        // badge-primary means blue button and badge-warning means yellow button as per bootstrap css class
        //m-2 means margining 2 spaces
    }

    formatCount() {
        console.log('in formatCount',this.props.counter);
        const valueOfCount = this.props.counter.value;
        const zeroElement = 'Zero' ; //u can do JSX code (<h1>Zero</h1>)
        console.log('valueOfCount',valueOfCount);
        return valueOfCount === 0 ? zeroElement : valueOfCount;
    }
}
 
export default Counter;