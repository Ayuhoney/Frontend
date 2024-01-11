import * as actionTypes from '../constants/WishlistConstants';

export const wishReducer = (state = { wishIteams: [] }, action) => {
    switch (action.type) {

        
        case actionTypes.AddWishItem:
            const newItem = action.payload;

            const existingItemIndex = state.wishIteams.findIndex(product => product.id === newItem.id);

            if (existingItemIndex >= 0) {
                return {
                    ...state,
                    wishIteams: state.wishIteams.map((item, index) =>
                        index === existingItemIndex
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                const temp = { ...newItem, quantity: 1 };
                return {
                    ...state,
                    wishIteams: [...state.wishIteams, temp]
                };
            }
        case actionTypes.RemoveWishItem:
            return {
                ...state,
                wishIteams: state.wishIteams.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
};
