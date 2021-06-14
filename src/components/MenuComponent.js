import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    const renderDish = (dish) => {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div/>
            );
    }

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(selectedDish)}
                </div>
            </div>
        </div>
    );
}

export default Menu;
