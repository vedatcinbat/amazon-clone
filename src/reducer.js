export const initialState = {
    basket : [],
    user: null,
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            break;
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            // Logid for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if(index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            }else {
                console.log('Cant remove product !!!');
            }
            return {...state, basket : newBasket};
            break;
        default : 
        return state;
    }
}

export default reducer;







