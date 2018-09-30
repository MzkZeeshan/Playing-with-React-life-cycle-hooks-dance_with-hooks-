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
      stop:false,
      status:null,
      flage:true,
      judgeflage:true
    }
    this.updateSteps=this.updateSteps.bind(this);
    this.updatestar=this.updatestar.bind(this);
    this.updatestatus=this.updatestatus.bind(this);
    this.umount=this.umount.bind(this);


  }
  umount()
  {
    this.setState({judgeflage:false})
  }
  updatestar(star)
  {
    this.setState({stop:star});



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

    const {judgeflage,flage,emotion,volume,furthersteps,stop}=this.state;
    console.log("further steps in render ",furthersteps);
console.log("status***",emotion);

    return (
      <div className="App">
{ flage &&   <Kid umount={this.umount} dressColor={"blue" } stop={stop} furtherSteps={furthersteps} updateemotion={emotion}/>}
      <br/>
      <hr/>
      <Teacher updateSteps={this.updateSteps}/>
      <br/>
      <hr/>
{judgeflage && <Judge updatestar={this.updatestar} updatestatus={this.updatestatus}/>}
    
<button onClick={()=>this.setState({flage:false})}>Ask To Leave</button>
      </div>
    );
  }
}

export default App;