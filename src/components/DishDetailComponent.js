import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';


class DishDetail extends Component {
    render() {
        const dish = this.props.dish

        if(dish != null) {
            return (
                    <>
                        <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>   
                                {this.renderComments(dish.comments)}   
                        </div>
                    </>
            )
        } else {
            return(<div></div>)
        }
    }

    renderComments = (comments) => {
        if(comments != null) {
            const listItems = comments.map((item)=>{
                return(
                    <div key={item.id}>
                        <p>{item.comment}</p>
                        <p>{`--${item.author}, ${item.date}`}</p>
                    </div>
                )
            })

            return(listItems)
        } else {
            return(<div></div>)
        }
    }
}


export default DishDetail
   