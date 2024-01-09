// GroupButton.js

import React from 'react';
import { ButtonGroup, Button, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../redux/actions/cartActions';

const Component = styled(ButtonGroup)`
    margin-top: 30px;
    radius
`;

const GroupButton = ({ itemId }) => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const selectedItem = cartItems.find(item => item.id === itemId);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementQuantity(itemId));
        updateAllItemCosts(cartItems, dispatch);
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(itemId));
        updateAllItemCosts(cartItems, dispatch);
    };

    const updateAllItemCosts = (items, dispatch) => {

        const updatedItems = items.map(item => ({
            ...item,
            price: {
                ...item.price,
                cost: item.price.mrp - (item.price.discount / 100) * item.price.mrp,
            },
        }));

        dispatch({ type: 'UPDATE_ALL_ITEM_COSTS', payload: updatedItems });
    };

    return (
        <Component >
            <Button style={{border:'none'}} variant="contained" color="success"  onClick={handleDecrement} disabled={selectedItem && selectedItem.quantity === 0}>
                -
            </Button>
            <Button style={{border:'none'}}>{selectedItem ? selectedItem.quantity : 0}</Button>
            <Button style={{border:'none'}} variant="contained" color="error" onClick={handleIncrement}>+</Button>
        </Component>
    );
};

export default GroupButton;
