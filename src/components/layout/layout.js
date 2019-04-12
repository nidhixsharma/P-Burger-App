import React ,{Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './layout.css';

class Layout extends Component {
    state ={
        showSideDrawer:false
    }

sideDrawerClosedHandler=()=>
{
 this.setState(
     {
         showSideDrawer :false
     }
 );
}

sideDrawerToggleHandler =()=>
{
    this.setState((prevState)=>{
return {showSideDrawer:!prevState.showSideDrawer};
    });

}


    render()
    {
       return ( <Aux>
sideDrawerToggleHandler =()=>
            <Toolbar
               isAuth={this.props.isAuthenticated}
               drawerToggleClicked={this.sideDrawerToggleHandler} />
           <SideDrawer
               isAuth={this.props.isAuthenticated}
               closed={this.sideDrawerClosedHandler}
               open={this.state.setState}
           />
            <main className={classes.Content}>
              {this.props.children}</main>
        </Aux>
       )

    }
   
}

const mapStateToProps =state=>{
    return {
        isAuthenticated :state.auth.token !=null
    };
};

export default connect(mapStateToProps)(Layout);