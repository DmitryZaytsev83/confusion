import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import List from "reactstrap/es/List";
import { Link } from "react-router-dom";

const RenderDish = ({dish}) => {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
};

const RenderComments = ({comments}) => {
    if (!comments) return <div/>;
    return (
        <List type="unstyled">
            {comments.map((comment, index) => (
                <li key={index}>
                    <p>{comment.comment}</p>
                    <h5> -- {comment.author} - {new Intl.DateTimeFormat(
                        'en-US',
                        {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}
                    </h5>
                </li>
            ))}
        </List>
    );
};

const DishDetailComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/home">Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem> <Link to="/menu">Menu</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        </div>
    );
};

export default DishDetailComponent;
