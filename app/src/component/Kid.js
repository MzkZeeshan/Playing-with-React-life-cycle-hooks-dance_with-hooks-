import React from 'react';


export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
 }
static getDerivedStateFromProps(props,state)
{
   
  return {danceSteps:  [...state.danceSteps,...props.furtherSteps],startedPerforming:!!props.furtherSteps.length,emotion: props.updateemotion?props.updateemotion:state.emotion};
 
}

componentDidMount()
{
  setTimeout(()=>{
  this.setState({
    danceSteps:['step1','step2']
  })},5000);

}
 qualified() {
   this.setState({startedPerforming: false})
 }

 render() {
   const {dressColor} = this.props;
   console.log()
   const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;
console.log("dance",danceSteps);
console.log("startedPerforming***",startedPerforming);
   return (
     
   <div>
     <div>dressColor: { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
    <div>Emotion: { emotion }</div>
    {startedPerforming &&
    <div>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
      <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
    </div>}
</div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };







// import React, { Component } from 'react';
// import './App.css';
// import Kid from './Components/Kid/Kid';
// import Teacher from './Components/Teacher/Teacher';
// import Judge from './Components/Judge/Judge';
// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       volume: 0
//     };

//     this.updateSteps = this.updateSteps.bind(this);
//     this.updateStatus = this.updateSteps.bind(this);
//   }
//   updateSteps(furtherStep){
    
//     this.setState({furtherStep})
//   }
//   updateStatus(){
//     this.setState({
//       status:'happy'
//     })
//   }
//   static getDrivedStateFromProps(){
//     return {volume: 5};
//   }
  
  
//   render() {
//     const {furtherStep,volume} = this.state;
//     console.log(furtherStep);
//     return (
//       <div >
//         <Kid dressColor = "green" furtherStep = {furtherStep} /><br/>
//         <Teacher updateSteps={this.updateSteps} />
//         <br /><br />
//         <Judge updateStatus = {this.updateStatus} />
//       </div>
//     );
//   }
// }

// export default App;