import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat: 1.3,
    chicken: 0.7,
};

const initialState = {
    ingredients: {
        salad: 0,
        chicken: 0,
        meat: 0,
        cheese: 0
    },
    price: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                },
                price: state.price+INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
                price: state.price-INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            return state;
    }
    return state;
}

export default reducer;