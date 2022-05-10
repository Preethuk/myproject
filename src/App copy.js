// import logo from './logo.svg';
// import './App.css';

import React from 'react';

// const style={App:{textAlign:"center"},AppHeader:{backgroundColor:"#282c34",minHeight: "100vh",
// display: "flex",
// flexDirection: "column",
// alignItems: "center",
// justifyContent: "center",
// fontSize: "calc(10px + 2vmin)",
// color: "white"}}

// function App() {
//   return (
//     <div style={style.App}>
//       <header style={style.AppHeader}>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


class ComponentOne extends React.Component{
  componentWillUnmount(){
    alert("component is going to be unmounted");
  }
  render(){
    return <h1>I am ComponentOne</h1>;
  }
}


class App extends React.Component{
  
  constructor(props){
    console.log("Constructor");
    super(props);
    this.state={text:"Welcome to react app",counter:0,display:true}
    this.HandleClick=this.HandleClick.bind(this);
    //State variables initialization here
    //Event Handling function binds here
  }
  componentDidMount(){
    console.log("Component didmount logged");
    setInterval(()=>{
      this.setState({text:"Sini"})
    },3000)
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps logged");
    return({value:props.value})
  }
  getSnapshotBeforeUpdate(preProps,preState){
    console.log("getSnapshotBeforeUpadate logged");
    console.log("previous prop and previous state",preProps,preState);
    return null;
  }

componentDidUpdate(preProps,preState){
  console.log("ComponentDidUpdate logged");
  console.log("previous prop and previous state",preProps,preState);
  console.log("current prop and current state",this.props,this.state);
}

  //EVENT HANDLING FUNCTION HERE
  
  
  HandleClick(){
    this.setState({text:"Sini"})
    console.log("handleclick log");
    //this.setState({text:"Hello"});
    console.log(this.props.value);
  }
  HandleChange(e){
    this.setState({text:e.target.value})
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate logged");
    console.log("props",nextProps);
    console.log("state",nextState);
    if(nextState.counter>4&&nextState.counter<8){
      return false;
    }
    else{
      return true;
    }
  }


  componentDidMount(){
    console.log("mount logged");
  }
  componentWillMount(){
    console.log("unmount");
  }
  render(){

    let comp;
    if(this.state.display){comp=<ComponentOne/>}


    console.log("render");
    const text="Welcome to React";
    //constants and variables initialization here
    return(
    <div>
      {console.log("return")}
      {comp}
      <h1>{this.state.counter}</h1>
      <input onChange={(e)=>this.HandleChange(e)} placeholder={this.state.text}></input>
      <button onClick={()=>{this.HandleClick()}}>console log</button>
      <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Set Counter</button>
      <button onClick={()=>{this.forceUpdate()}}>Render</button>
      <button onClick={()=>{this.setState({display:false})}}>Unmount me</button>
    </div>
    )
  }
}

export default App;