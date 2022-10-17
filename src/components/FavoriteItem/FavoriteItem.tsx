import styled from "styled-components";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC } from "react";
import { IData } from "../../interface";
import { useDispatch } from "react-redux";
import { pushToInfo } from "../../store";

interface FavoriteItemProps {
  data: IData;
  navigation?: any;
}

export const FavoriteItem: FC<FavoriteItemProps> = ({ data, navigation }) => {
  const { id, title, image, price } = data;
  const dispatch = useDispatch();

  const handler = () => {
    navigation.push("InfoScreen", { id });
    dispatch(pushToInfo(data));
  };

  return (
    <Wrapper onPress={handler}>
      <ImageWrap>
        <Img
          source={{
            uri: image,
          }}
        />
      </ImageWrap>
      <TextWrap>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </TextWrap>
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
const ImageWrap = styled(View)`
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 15px;
  margin-right: 15px;
`;
const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextWrap = styled(View)`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;
const Title = styled(Text)`
  font-size: 23px;
`;
const Price = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;
