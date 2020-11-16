//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters: [
        { id:1, value: 0},
        { id:2, value: 0},
        { id:3, value: 0},
        { id:4, value: 0}
    ]
 };

 constructor() {
   super();
   console.log('App - constructor');
 }

 componentDidMount() {
   //this is where we would do ajax calls
 }

 handleIncrement = counter => {
    console.log('counter during increment',counter);
    const counters = [...this.state.counters]; 
    // ... is spread operator which clones the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log('after increment',this.state.counters[index]);
    this.setState({ counters });
 }

 handleReset = () => {
     const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
     });
     this.setState({ counters });
 }

 handleDelete = (counterId) => {
    console.log('delete event handler called',counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
 };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
