import './App.css';
import Form from './components/Form/Form'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Queries from './components/Queries/Queries'
import Signup from './components/Signup/Signup'
import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import RegexList from './RegexList'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router >
          <switch>
            <Header />
            <div>
              {/* <Form /> */}
              <Route exact path="/" component={Form} />
            </div>
            <Route exact path="/login" component={Login} />
            <div class='queries'>
              {/* <Queries /> */}
              <Route exact path="/" component={Queries} />
            </div>
            <div>
              <Route exact path="/signup" component={Signup} />
            </div>
          </switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
