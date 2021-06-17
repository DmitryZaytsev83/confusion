import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({dish, onClick}) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

function Menu(props) {
    return (
        <div className="row">
            {props.dishes.map((dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} onClick={props.onClickHandler} />
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;
