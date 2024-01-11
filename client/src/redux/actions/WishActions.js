import * as actionTypes from '../constants/WishlistConstants';
import axios from 'axios';

export const AddWishItem = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({ type: actionTypes.AddWishItem, payload: { ...data, quantity } });

    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_WISHCART_ERROR, payload: error.message });
    }
};

export const RemoveWishItem = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.RemoveWishItem,
        payload: id
    });
};
