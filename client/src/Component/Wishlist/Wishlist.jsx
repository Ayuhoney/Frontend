import { useEffect } from "react";

import { Box, Typography, Button, Grid, styled } from "@mui/material";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { AddWishItem,RemoveWishItem } from "../../redux/actions/WishActions";
import WishlistIteam from "./WishlistIteam";

//import {post} from '../../utils/paytm';
//import { payUsingPaytm } from '../../service/api';

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 10px 24px;
  box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
  border: 1px solid #f0f0f0;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
  border: 3px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const Wishlist = () => {
  const wishdetails = useSelector((state) => state.wishList);
  const { wishIteams } = wishdetails;
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (wishIteams && id !== wishIteams.id) dispatch(AddWishItem(id)); //
  }, [dispatch, wishIteams, id]);

  const removeItemFromWish = (id) => {
    dispatch(RemoveWishItem(id));
  };

  const buyNow = async () => {
    //let response = await payUsingPaytm({ amount: 500, email: 'ayush2211207@gmail.com'});
    // var information = {
    //     action: 'https://securegw-stage.paytm.in/order/process',
    //     params: response
    // }
    //post(information);
  };

  return (
    <Component container>
      <LeftComponent item lg={9} md={9} sm={12} xs={12}>
        <Header>
          <Typography style={{ fontWeight: 600, fontSize: 18 }}>
            My WishList({wishIteams?.length})
          </Typography>
        </Header>

        { wishIteams.map((item, idx) => (
          <WishlistIteam item={item}  key={idx} removeItemFromWish={removeItemFromWish}/>
        ))}

        <BottomWrapper>
          <StyledButton onClick={() => buyNow()} variant="contained">
            Place Order
          </StyledButton>
        </BottomWrapper>
      </LeftComponent>
    </Component>
  );
};

export default Wishlist;
