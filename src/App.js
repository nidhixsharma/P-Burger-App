import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route , Switch,withRouter,Redirect} from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/logout/logout'; 
import * as actions from './store/actions/index';
import {connect} from 'react-redux';
class App extends Component {
  componentDidMount()
  {
    this.props.onTryAutoSignUp();
  }
  
  render() {

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />

      </Switch>);

    if (this.props.isAuthenticated) {
      routes = (<Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>);
    }
    return (
      <div >
        <Layout>
      {routes}      
        </Layout>
      </div>
      
    );
  }
}

const mapStateToProps=state=>{
  return {
    isAuthenticated :state.auth.token !== null
  };
};

const mapDispatchToProps =dispatch =>{
  return {
onTryAutoSignUp:()=>dispatch(actions.authCheckState())
  };
};



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
