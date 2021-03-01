
import './App.css';
import React, {Component} from 'react';
import ImgSrc from './image.jpeg';


class App extends Component {
  state = {
    Person :{
      fullName :"Driche Abdou",
      imgSrc :ImgSrc,
      profession :"Fullstack developer",
      bio:"hello i'm a Web Dev "
    },
    show:false,
    counter : 0
  }
  increamentCounter = ()=>{
    const {counter} = this.state; 
    this.setState({counter : counter + 1});
  };

  componentDidMount (){
    console.log("counter", this.state.counter)
   setInterval(this.increamentCounter, 1000);
 };

  handleClick = () => this.setState({show: !this.state.show})

  render(){
    const styleProfile ={
      color : "blue",
      display :"flex",
      
    }
    return(
      <>
        <div className="show" style={{display:"flex",hight:"700px" , flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
          <h1> The Component Has Mounted </h1> 
          <h2> {this.state.counter} </h2>
          <button onClick ={this.handleClick}  >  {this.state.show ? 'Hide profile' : 'Show Profile'} </button>
          {
            (this.state.show) &&
            <div style ={styleProfile} >
              <div  >
                <img src={this.state.Person.imgSrc} alt="profile"  width="200px" />
              </div >
              <div className="info" >
                <h2> {this.state.Person.fullName}  </h2>
                <h3> {this.state.Person.profession} </h3>
                <p> {this.state.Person.bio} </p>

              </div>
            </div>
          }
        </div>
      </>
    )
  }
}


export default App;


