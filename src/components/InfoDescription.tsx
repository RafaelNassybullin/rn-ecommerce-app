import { FC } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

interface InfoDescriptionProps {
  description: string;
}

export const InfoDescription: FC<InfoDescriptionProps> = ({ description }) => {
  return (
    <DescriptionWrap>
      <DescriptionText>{description}</DescriptionText>
    </DescriptionWrap>
  );
};

const DescriptionWrap = styled(View)`
  margin-top: 10px;
`;
const DescriptionText = styled(Text)`
  font-size: 16px;
`;
