import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./MenuComponent";
import DishDetailComponent from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

function Main() {
    const [selectedDishId, setSelectedDishId] = useState(null);
    return (
        <div className="Main">
            <Navbar color="primary" dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <div className="container">
                <MenuComponent
                    dishes={DISHES}
                    onClickHandler={(dishId) => setSelectedDishId(dishId)}/>
                {
                    (selectedDishId !== null) &&
                    <DishDetailComponent
                        dish={DISHES.filter((dish) => dish.id === selectedDishId)[0]}/>
                }
            </div>
        </div>
    );
}

export default Main;
