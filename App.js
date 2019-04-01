import React, { Component } from 'react';
import classess from './App.css';
import {Route, Switch,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from './hoc/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import AdminPanel from './containers/AdminPanel/AdminPanel';
import Auth from './containers/Auth/Auth';
import LogOut from './components/Navigaton/LogOut/LogOut';
import ThankYou from './components/UI/ThankYouPage/ThankYouPage';
import ThankYouFailed from './components/UI/ThankYouFailed/ThankYouFailed';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSingup(this.props.isAdm);
  }
  
  render() {

    const routes=(
      <Switch>
        <Route path='/sing-in' component={Auth} />
        <Route path='/logout' component={LogOut} />
        <Route path='/admin-panel' component={AdminPanel} />
        <Route path='/thankyou' component={ThankYou} />
        <Route path='/thankyoufailed' component={ThankYouFailed} />
        <Route path='/' exact component={MainPage} />
      </Switch>
    );
    
    return (
      <ParallaxProvider>
      <div className={classess.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
      </ParallaxProvider>
    );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated: state.auth.token !==null,
    isAdm: state.auth.isA
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSingup: (isAdmin) => dispatch(actions.authCheckState(isAdmin))
  };
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

