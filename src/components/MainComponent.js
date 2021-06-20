import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import ContactComponent from "./ContactComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

const HomePage = (props) => {
    const dish = DISHES.filter((dish) => dish.featured)[0];
    const promotion = PROMOTIONS.filter((promo) => promo.featured)[0];
    const leader = LEADERS.filter((leader) => leader.featured)[0];
    return (
        <HomeComponent dish={dish} promotion={promotion} leader={leader}/>
    )
}

function Main() {
    return (
        <div className="Main">
            <HeaderComponent/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <MenuComponent dishes={DISHES}/>}/>
                <Route exact path="/contactus" component={() => <ContactComponent/>}/>
                <Redirect to="/home"/>
            </Switch>
            <FooterComponent/>
        </div>
    );
}

export default Main;
