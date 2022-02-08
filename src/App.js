import logo from './logo.svg';
import './App.css';
import React from 'react';
import { CardList } from './component/Card-list/card-list.component';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
     monsters:[]
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>
      response.json()).then(
        users => this.setState({monsters:users})
      )
  }


  render(){
       const {monsters, searchField } = this.state;

       const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())) 

    return (
      <div className="App">
        <div>
          <input type="search" placeholder='serach monsters' onChange={e => this.setState({searchField: e.target.value})}/>
        </div>
        <CardList name={filteredmonsters}>
       </CardList>
      
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           my name is shubham
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <button>change STATE</button>
//       </header>
//     </div>
//   );
//}

export default App;
