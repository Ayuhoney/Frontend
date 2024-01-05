import { useState } from 'react';
import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';



const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
    margin-top:10px;
`;

const Theme = styled(Box)`
    background: rgb(34 179 255);
    margin-top: -9px;
    cursor: pointer;
    padding: 9px;
    border-radius: 5px;
    margin-right: -15px;
    margin-left: 5px;
    font-weight: 500;
    margin-bottom: 4px;
    width:70px;
    text-align:center;
`;

const Profile = ({ account, setAccount }) => {
    const [open, setopen] = useState(false);
    
    const handleClick = (event) => {
        setopen(event.currentTarget);
    };

    const handleClose = () => {
        setopen(false);
    };

    const logout = () => {
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Theme >{account}</Theme>
            </Box>


            <Component anchorEl={open} open={Boolean(open)}onClose={handleClose}>

                <MenuItem onClick={() => { handleClose(); logout();}}>

                    <PowerSettingsNew fontSize='small' color='primary'/> 
                    
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )    
}

export default Profile;