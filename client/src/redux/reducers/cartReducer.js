import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {

        
        case actionTypes.ADD_TO_CART:
            const newItem = action.payload;

            const existingItemIndex = state.cartItems.findIndex(product => product.id === newItem.id);

            if (existingItemIndex >= 0) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item, index) =>
                        index === existingItemIndex
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                const temp = { ...newItem, quantity: 1 };
                return {
                    ...state,
                    cartItems: [...state.cartItems, temp]
                };
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(product => product.id !== action.payload)
            };
        case actionTypes.INCREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case actionTypes.DECREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
                )
            };
        default:
            return state;
    }
};
