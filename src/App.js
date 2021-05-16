import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { connect } from 'react-redux';
import { getUserAuth } from './actions';

function App(props) {
  useEffect(() => {
    console.log('mohan logges dinb');
    props.getuserAuth();
    console.log('mohan logges dinb');
  }, []);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getuserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
