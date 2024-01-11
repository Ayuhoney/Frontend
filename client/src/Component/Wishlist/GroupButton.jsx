// GroupButton.js

import React from 'react';
import {Button, styled, Typography } from '@mui/material';
import { useSelector} from 'react-redux';

const Component = styled(Typography)`
    margin-top: 33px; 
`;

const GroupButton = ({ itemId }) => {
    
    const wishdetails = useSelector(state => state.wishList);
    const { wishIteams } = wishdetails;

    const selectedItem = wishIteams.find(item => item.id === itemId);

    return (
        <Component>
            <strong>Qnt:</strong><Button style={{border:'none'}}>{selectedItem ? selectedItem.quantity : 0}</Button>
        </Component>
    );
};

export default GroupButton;
