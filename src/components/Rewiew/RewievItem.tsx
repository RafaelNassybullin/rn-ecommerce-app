import styled from "styled-components";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ReviewItem = () => {
  const arr = Array(5).fill("*");

  return (
    <Wrapper>
      <NameStar>
        <Name>Rafael Nasybullin</Name>
        <Stars>
          {arr.map((_, idx) => (
            <Ionicons key={idx} name="star" size={20} color={"#FFCA00"} />
          ))}
        </Stars>
      </NameStar>
      <RewievTextWrap>
        <RewiewText>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </RewiewText>
      </RewievTextWrap>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  border-color: #e3e2e4;
  border-width: 0px;
  border-top-width: 2px;
  width: 100%;
  min-height: 49px;
  margin-top: 15px;
  padding: 5px 0;
  padding-bottom: -15px;
  display: flex;
`;
const Name = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;
const NameStar = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Stars = styled(View)`
  display: flex;
  flex-direction: row;
`;
const RewievTextWrap = styled(View)`
  margin-top: 10px;
`;
const RewiewText = styled(Text)`
  font-size: 15px;
`;
