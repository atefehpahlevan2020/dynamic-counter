import React from 'react';
import Counter from './components/Counter';
import './App.css';


class App extends React.Component{
  render(){
    return(
      <div>
        <div className='counter-container'>
          <Counter counter={10} displayBtns={true} is_finished={false}/> 
        </div>
      </div>
    )
  }
}


export default App;
