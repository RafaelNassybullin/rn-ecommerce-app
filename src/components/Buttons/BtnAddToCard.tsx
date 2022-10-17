import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { cartReselect, deleteFromCart, insertToCart } from "../../store";
import { dataFilter } from "../../utils";
import { FC } from "react";

interface BtnAddToCartProps {
  data?: any;
}

export const BtnAddToCard: FC<BtnAddToCartProps> = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartReselect);
  const filter = dataFilter(cart, data.id);

  const handler = () => {
    if (filter) {
      dispatch(insertToCart(data));
    } else {
      dispatch(deleteFromCart(data));
    }
  };

  return (
    <Wrapper onPress={handler} btncolor={filter}>
      <BtnText>{filter ? "Add to cart" : "in cart"}</BtnText>
      {filter ? (
        <Ionicons name="cart-outline" size={27} color={"white"} />
      ) : (
        <Ionicons name="cart" size={27} color={"white"} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)<{ btncolor: boolean }>`
  width: 60%;
  height: 49px;
  background:${(props) => (props.btncolor ? "#7072d2" : "#1CD760")}; 
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled(Text)`
  font-size: 20px;
  color: white;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: 500;
`;
