import React from 'react';

export default class Judge extends React.Component {
    constructor() {
      super();
     this.state = {stars: 0, available: false}
     this.applaud=this.applaud.bind(this)
    this.provideStars=this.provideStars.bind(this)
      }
   
    applaud() {
      
    this.props.updatestatus("happy")
   
      //Send this applaud status t
    }
shouldComponentUpdate(preprops,prestate)
{
 return this.state.stars<=5?true:false;

}   
    provideStars() {
     // const {stars} = this.state;
     
    
      this.setState({stars:  ++this.state.stars})
      this.props.updatestar(this.state.stars)
    }
   
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
          <button type="button" onClick={this.applaud}>
           Appreciate performance
          </button>
          <button type="button" onClick={this.provideStars}>
           Provide stars
          </button>
   
          Kid is available: {available}
   
          Stars gained: {stars}
        </div>
      );
    }
   }
   