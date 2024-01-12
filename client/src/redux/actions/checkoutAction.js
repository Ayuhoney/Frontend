import * as actionTypes from '../constants/checkoutConstents';
import axios from 'axios';

export const addToCheckout = (id, quantity, deliveryAddress) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({
            type: actionTypes.ADD_TO_CHECKOUT,
            payload: {
                product: { ...data, quantity },
                deliveryAddress,
            },
        });

    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CHECKOUT_ERROR, payload: error.message });
    }
};

export const removeToCheckout = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CHECKOUT,
        payload: id,
    });
};

export const incrementQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.INCREMENT_QUANTITY,
        payload: id,
    });
};

export const decrementQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.DECREMENT_QUANTITY,
        payload: id,
    });
};

export const setDeliveryAddress = (address) => (dispatch) => {
    dispatch({
        type: actionTypes.SET_DELIVERY_ADDRESS,
        payload: address,
    });
};
