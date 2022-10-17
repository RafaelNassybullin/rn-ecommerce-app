import { FC } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IData } from "../interface";
import { pushToInfo } from "../store/reducer";

interface CardProps {
  navigation?: any;
  data: IData;
}

export const Card: FC<CardProps> = ({ navigation, data }) => {
  const dispatch = useDispatch();
  const { id, title, image, price } = data;

  const handler = () => {
    navigation.push("InfoScreen", { id });
    dispatch(pushToInfo(data));
  };

  return (
    <Wrapper onPress={handler}>
      <ImgWrap>
        <ImgItem
          source={{
            uri: image,
          }}
        />
      </ImgWrap>
      <View>
        <CardName>{title}</CardName>
        <Price>${price}</Price>
      </View>
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  width: 48%;
  height: 300px;
  margin-bottom: 49px;
`;
const ImgWrap = styled(View)`
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 10px;
`;
const ImgItem = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardName = styled(Text)`
  font-size: 16px;
`;
const Price = styled(Text)`
  font-size: 17px;
  font-weight: bold;
`;
