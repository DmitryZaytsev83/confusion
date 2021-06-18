import React, { useState } from "react";
import MenuComponent from "./MenuComponent";
import DishDetailComponent from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

function Main() {
    const [selectedDishId, setSelectedDishId] = useState(null);
    return (
        <div className="Main">
            <HeaderComponent/>
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
            <FooterComponent />
        </div>
    );
}

export default Main;
