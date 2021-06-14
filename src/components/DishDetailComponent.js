import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import List from "reactstrap/es/List";

const DishDetailComponent = (props) => {
    const renderComments = (comments) => {
        if (!comments) return <div/>;
        return (
            <List type="unstyled">
                {comments.map((comment, index) => (
                    <li key={index}>
                        <p>{comment.comment}</p>
                        <h5> -- {comment.author} - {comment.date.slice(0, 10)}</h5>
                    </li>
                ))}
            </List>
        )
    }
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={props.dish.image} alt={props.dish.name}/>
                    <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {renderComments(props.dish.comments)}
            </div>
        </div>
    );
};

export default DishDetailComponent;