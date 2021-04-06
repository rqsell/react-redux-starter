import React, { Component } from 'react';
import { addToCart } from './actions/cartActions'
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return {
        items: state.items
         }
    }

    const mapDispatchToProps= (dispatch)=>{
    
        return{
            addToCart: (id)=>{dispatch(addToCart(id))}
        }
    }
class Home extends Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
        }
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id} >
                        <div className="card-image" id="itemcard">
                            <img id="itemimg" src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"  onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div className="container">
                <h3 className="center" >Our items</h3>
                <div className="box" id="itempage">
                    {itemList}
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)