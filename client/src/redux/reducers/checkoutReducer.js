import * as actionTypes from '../constants/checkoutConstents';

const initialState = {
    checkoutItems: [],
    deliveryAddress: {
        firstname: '',
        lastname: '',
        Address: '',
        pincode: '',
        phone: '',
        country: '',
        state: '',
    },
};

export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CHECKOUT:
            const newItem = action.payload.product;
            const existingItemIndex = state.checkoutItems.findIndex((product) => product.id === newItem.id);

            if (existingItemIndex >= 0) {
                return {
                    ...state,
                    checkoutItems: state.checkoutItems.map((item, index) =>
                        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                const temp = { ...newItem, quantity: 1 };
                return {
                    ...state,
                    checkoutItems: [...state.checkoutItems, temp],
                };
            }
        case actionTypes.REMOVE_FROM_CHECKOUT:
            return {
                ...state,
                checkoutItems: state.checkoutItems.filter((product) => product.id !== action.payload),
            };
        case actionTypes.INCREMENT_QUANTITY:
            return {
                ...state,
                checkoutItems: state.checkoutItems.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case actionTypes.DECREMENT_QUANTITY:
            return {
                ...state,
                checkoutItems: state.checkoutItems.map((item) =>
                    item.id === action.payload ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
                ),
            };
            case actionTypes.SET_DELIVERY_ADDRESS:

                if (state.checkoutItems.length === 0) {
                    return {
                        ...state,
                        deliveryAddress: initialState.deliveryAddress,
                    };
                }
    
                return {
                    ...state,
                    deliveryAddress: action.payload,
                };
    
            default:
                return state;
    }
};
