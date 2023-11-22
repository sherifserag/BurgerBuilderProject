import React,{Component} from "react";
import * as actions from '../../../store/actions/index'
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'




class LogOut extends Component {

componentDidMount(){
    this.props.onLogout();
}



render (){
    return <Redirect to="/"/>;
}

}

const mapDispatchtoProps = dispatch =>{


    return {
    onLogout: () => dispatch(actions.logout())
    };
}



export default connect(null,mapDispatchtoProps) (LogOut);