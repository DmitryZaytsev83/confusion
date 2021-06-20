import React from "react";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
    return (
        <div className="Main">
            <HeaderComponent/>
            <Switch>
                <Route path="/home" component={HomeComponent}/>
                <Route exact path="/menu" component={() => <MenuComponent dishes={DISHES}/>}/>
                <Redirect to="/home"/>
            </Switch>
            <FooterComponent/>
        </div>
    );
}

export default Main;
