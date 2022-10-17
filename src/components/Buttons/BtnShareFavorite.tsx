import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromFavorites,
  favoriteReselect,
  insertToFavorites,
} from "../../store";
import { FC } from "react";
import { IData } from "../../interface";
import { dataFilter } from "../../utils";

interface BtnShareProps {
  data: any;
}

export const BtnShareFavorite: FC<BtnShareProps> = ({ data }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(favoriteReselect);
  const filter = dataFilter(favorite, data.id);

  const handler = () => {
    if (filter) {
      dispatch(insertToFavorites(data));
    } else {
      dispatch(deleteFromFavorites(data));
    }
  };

  return (
    <Wrapper>
      <AddToFavorite onPress={handler}>
        <Ionicons
          name={!filter ? "heart" : "heart-outline"}
          size={27}
          color={"crimson"}
        />
      </AddToFavorite>
      <Share>
        <Ionicons name="share-outline" size={27} color={"black"} />
      </Share>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
`;

const AddToFavorite = styled(TouchableOpacity)`
  width: 49px;
  height: 49px;
  background: #e8e7e9;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Share = styled(TouchableOpacity)`
  width: 49px;
  height: 49px;
  background: #e8e7e9;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 2px;
`;
