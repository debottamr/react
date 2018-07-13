import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


	 


 function RenderDish({dish}){
      if(dish != null){
         return(
             <Card>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                    </CardBody>
             </Card>
           );
      }else{
        return (
            <div></div>
          );
      }
    }
function RenderComments({dish}){
	if(dish != null){
		 
		 const menu = dish.comments.map((comment) => {
		 	return (
		 			<ul class="list-unstyled">
		 				<li>{comment.comment}</li>
		 				<li>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
		 			</ul>
		 		);
		 });
		 return (
            <div> <h4>Comments</h4>{menu}</div>
          );	
	}else{
		return (
            <div></div>
          );
     }
}

 const DishDetail = (props) =>{
        return (
           <div className="container">
           <div className="row">
                <div className="col-12 col-md-5 m-1">
                 <RenderDish dish={props.dish} />
               </div>
               <div className="col-12 col-md-5 m-1 list-unstyled" >
               	  <RenderComments dish={props.dish} />
               </div>
           </div>
          </div>
        );
    }
    


export default DishDetail;