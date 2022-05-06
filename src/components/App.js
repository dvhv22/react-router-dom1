import logo from './logo.svg';
import './App.css';
import Nav from './navi/Nav';
import Todos from './Todo/Todos';
import Count from './covidData/Count';
import Covid from './covidData/Covid';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {

  const Todo = [
    { id: 'todo1', title: 'learning' },
    { id: 'todo2', title: 'coding' },
    { id: 'todo3', title: 'playing games' }

  ];

  return (


    <div className="App">
      <Router>
        <Nav />

        <header className="App-header">
          <br /><br />

          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />

          {/* <Count /> */}
          {/* <Todos
          Todo={Todo}
        /> */}
          {/* <Covid /> */}

          <Routes>
            <Route exact path="/"
              element={<Home />}
            />
            <Route path="/Covid"
              element={<Covid />}
            />
            <Route path="/Todos"
              element={<Todos
                Todo={Todo} />}
            />
            <Route path="/Count"
              element={<Count />} />

          </Routes>


        </header>
      </Router >
    </div>


  );
}

export default App;
