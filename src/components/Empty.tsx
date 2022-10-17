import { FC, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface EmptyProps {
  text: string;
  icon: "heart" | "cart";
  iconColor: string;
}

export const Empty: FC<EmptyProps> = ({ text, icon, iconColor }) => {
  return (
    <Wrapper>
      <Icon>
        <Ionicons name={icon} size={79} color={iconColor} />
      </Icon>
      <Title>{text}</Title>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0;
`;

const Icon = styled(View)`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background: #e8e6e9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
`;
