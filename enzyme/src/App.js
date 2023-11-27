import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      wart: props.wart
    }
  }

  dodaj = () =>
  {
    this.setState({
      wart: this.state.wart + 1
    }
    );
  }

  odejmij = () => {
    this.setState({
      wart: this.state.wart - 1
    });
  }

  render(){
      return(
        <div className='App'>
          <h1>Nasza wartość wynosi: <span>{this.state.wart}</span></h1>
          <button onClick={this.dodaj}>Zinkrementuj wartość</button>
          <button onClick={this.odejmij}>Zdekrementuj wartość</button>
          <List el1="Pierwszy" el2="Drugi" el3="Trzeci"/>
        </div>
      );
  }
}

export default App;
