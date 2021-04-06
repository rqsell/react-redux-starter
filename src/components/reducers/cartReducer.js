import Aloe from "../../images/aloe.jpg";
import Frangipani from "../../images/frangipani.jpg";
import Hibiscus from "../../images/hibiscus.jpg";
import LambsEar from "../../images/lambs-ear.jpg";
import Mimosa from "../../images/mimosa-pudica.jpg";
import { ADD_TO_CART} from '../actions/action-types/cart-actions'
const initState={
items:[
    {id:1,title:'Aloe', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1,img:Aloe},
    {id:2,title:'Frangipani', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1,img: Frangipani},
    {id:3,title:'Hibiscus', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:1,img: Hibiscus},
    {id:4,title:'LambsEar', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1,img:LambsEar},
    {id:5,title:'Mimosa', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1,img: Mimosa},
],
addedItems:[],
total: 0
}
const cartReducer= (state = initState,action)=>{
    //Home
    if(action.type  === ADD_TO_CART){
        let addedItem = state.items.find(item => item.id === action.id)
        //see if item is already added
        let existed_item= state.addedItems.find(item => action.id === item.id)
        if(existed_item){
           addedItem.quantity += 1
           return{
               ...state,
               total: state.total + addedItem.price
           }
        }
        else{
            addedItem.quantity = 1;
            //new total with change of quantity
            let newTotal = state.total + addedItem.price
        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
        }
        }
    }
    return state;

}
export default cartReducer;
