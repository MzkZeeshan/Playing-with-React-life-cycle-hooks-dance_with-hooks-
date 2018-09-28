import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kid from './component/Kid'
import Teacher from './component/Teacher'
import Judge from './component/Judge'
class App extends Component {
  constructor()
  {
    super()
    this.state=
    {
      volume:0,
      furthersteps:[],
      stop:0,
      status:null
    }
    this.updateSteps=this.updateSteps.bind(this);
    this.updatestar=this.updatestar.bind(this);
    this.updatestatus=this.updatestatus.bind(this);

  }
  updatestar(star)
  {



  }
  updateSteps(steps)
  {
    this.setState({furthersteps:steps})
  }
  updatestatus(status)
  {
    this.setState({emotion:status})

  }
 
static getDerivedStateFromProps(props,state)
{
  return { volume: 5}
}
 render() {

    const {emotion,volume,furthersteps}=this.state;
    console.log("further steps in render ",furthersteps);
console.log("status***",emotion);

    return (
      <div className="App">
      <Kid dressColor={"blue" } furtherSteps={furthersteps} updateemotion={emotion}/>
      <br/>
      <hr/>
      <Teacher updateSteps={this.updateSteps}/>
      <br/>
      <hr/>
<Judge updatestar={this.updatestar} updatestatus={this.updatestatus}/>
    
      </div>
    );
  }
}

export default App;