import React, { PureComponent } from 'react';

class Life extends PureComponent {

  // 1 get defualt props

  // 2 set default state
  state = {
    title:'Life cycles'
  }

  // // 3 before render
  // componentWillMount(){
  //   console.log('3 before render')
  // }

  // componentWillUpdate(){
  //   console.log('BEFORE UPDATE')
  // }

  // componentDidUpdate(){
  //   console.log('AFTER UPDATE')
  // }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this.state.title);
  //   console.log(nextState.title);
  //   if(nextState.title === 'something else'){
  //     return false;
  //   }
  //   return true;
  // }

  // componentWillReceiveProps(){
  //   console.log('BEFORE RECEIVE PROPS')
  // }

  // componentWillUnmount(){
  //   console.log('UNMOUNT')
  // }

  // 4 render jsx
  render() {
    console.log("RENDER")
    return(
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={
          ()=> this.setState({
            title:'something elsef'
          })}>
          Click to change</div>
      </div>
    )
  }


  // // 5 after render
  // componentDidMount() {
  //   console.log('5 after render')
  // }

}
export default Life;