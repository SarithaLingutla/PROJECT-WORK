import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { removeItem,addQuantity,subtractQuantity} from './actions/cart'
import Receipt from './Receipt'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
        toast("Quantity added");
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
        toast("Quantity Decreased")
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <div class="container">
                        <div class="row">
                          <div class="col-sm-4">
                          <div className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                     <img src={item.img} alt={item.img} style={{width:"200px",height:"200px"}} className=""/>
                                        
                                        
                                    </div>
                          </div>
                          <div class="col-sum-4">
                              
                          <div className="item-desc">
                          
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                </div>
                                </div>
                                
                                <div class="col-sum-4">
                                        <div className="card-content">
                                            <Link to="/shoppingcart"><i className="fas fa-arrow-up" onClick={()=>{this.handleAddQuantity(item.id)}}></i></Link>
                                            <Link to="/shoppingcart"><i className="fas fa-arrow-down" onClick={()=>{this.handleSubtractQuantity(item.id)}}></i></Link>
                                            <button className="waves-effect waves-dark btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                        </div>
                                       </div>
                                    </div>
                                    
                                </div>
                                </div>
                                    
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
        <div className="card-body">
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Receipt />          
            </div>
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)