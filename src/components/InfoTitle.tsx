import { FC } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

interface InfoTitleProps {
  title: string;
  price: string;
}

export const InfoTitle: FC<InfoTitleProps> = ({ title, price }) => {
  return (
    <TextWrap>
      <Title>{title}</Title>
      <Price>${price}</Price>
    </TextWrap>
  );
};

const TextWrap = styled(View)``;
const Title = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`;
const Price = styled(Text)`
  font-size: 22px;
`;
