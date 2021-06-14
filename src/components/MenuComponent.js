import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetailComponent from "./DishDetailComponent";

function Menu(props) {
    const [selectedDish, setSelectedDish] = useState(null);
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => setSelectedDish(dish)}>
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            {selectedDish && <DishDetailComponent dish={selectedDish}/>}
        </div>
    );
}

export default Menu;
