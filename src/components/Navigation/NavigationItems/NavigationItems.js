import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthinticated?<NavigationItem link="/orders">Orders</NavigationItem>:null}
        {props.isAuthinticated 
        ?<NavigationItem link="/logout">Log Out</NavigationItem>
        :<NavigationItem link="/auth">Log In</NavigationItem>
        }
    </ul>
);

export default navigationItems;