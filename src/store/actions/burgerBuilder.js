import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';

export const addIngredient = (name) =>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient = (name) =>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const resetIngredients = () =>{
    return{
        type:actionTypes.RESET_INGREDIENTS,
    }
}
export const initIngredients = () =>{
    return dispatch =>{
        // axios.get( 'https://react-my-burger-8c974.firebaseio.com/ingredient.json' )
        //     .then( response => {
        //         this.setState( { ingredients: response.data } );
        //     } )
        //     .catch( error => {
        //         this.setState( { error: true } );
        //     } );
    }
}