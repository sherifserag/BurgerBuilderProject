import React, { Component } from 'react';
import { Route, Switch , withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import LogOut from './containers/Auth/LogOut/LogOut';
import * as actions from './store/actions/index'
import { Redirect } from 'react-router-dom';




class App extends Component {
  
  componentDidMount(){

    this.props.onTryAutoSignUp();
  }
 


  render () {
let routes = (
            <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
            <Redirect to="/"/> {/* this is to redirect any unknown links to home */}
            </Switch>
);


if(this.props.isAuthenticated){

  routes=(
           <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/logout" exact component={LogOut} />
            <Redirect to="/"/>
          </Switch>
  );
}

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return{
    isAuthenticated: state.auth.token !== null
  };
};


const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};



export default withRouter(connect(mapStateToProps,mapDispatchToProps) (App));
