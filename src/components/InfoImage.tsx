import { FC } from "react";
import { View, Image } from "react-native";
import styled from "styled-components";

interface InfoImageProps {
  image: any;
}

export const InfoImage: FC<InfoImageProps> = ({ image }) => {
  return (
    <ImgWrap>
      <ImageItem source={{ uri: image }} />
    </ImgWrap>
  );
};

const ImgWrap = styled(View)`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 8px;
`;
const ImageItem = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
