import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card className="m-1">
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments == null) {
      return <div></div>;
    }
    const comnt = comments.map((comments) => {
      return (
        <div key={comments.id}>
          <p>{comments.comment}</p>
          <p>
            -- {comments.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comments.date)))}
          </p>
        </div>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{comnt}</ul>
      </div>
    );
  }

  render() {
    const dish = this.props.dish;

    if (dish == null) {
      return <div></div>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">{this.renderDish(dish)}</div>
          <div className="col-12 col-md-5">
            {this.renderComments(dish.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
