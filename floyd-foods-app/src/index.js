import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
//import './css/index.css';

class App extends Component {
    render() {
      return (
        <React.Fragment>
                  <NavBar />
        
        <div className="App">
          <h1>Hello, React!</h1>
        </div>
        </React.Fragment>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))