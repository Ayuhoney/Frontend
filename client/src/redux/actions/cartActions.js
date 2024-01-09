// cartActions.js

import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
};

export const incrementQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.INCREMENT_QUANTITY,
        payload: id
    });
};

export const decrementQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.DECREMENT_QUANTITY,
        payload: id
    });
};
