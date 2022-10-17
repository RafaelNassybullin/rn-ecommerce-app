import { FC } from "react";
import { View, ScrollView } from "react-native";
import { Container } from "../style";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { infoReselect } from "../store";
import { InfoImage, InfoTitle, InfoDescription } from "../components";
import { BtnAddToCard } from "../components/Buttons/BtnAddToCard";
import { BtnShareFavorite } from "../components/Buttons/BtnShareFavorite";
import { Reviews } from "../components/Rewiew/Rewiew";

interface InfoScreenProps {}

export const Info: FC<InfoScreenProps> = () => {
  const data = useSelector(infoReselect);

  const { image, title, description, price } = data;

  return (
    <ScrollView>
      <Container>
        <Wrapper>
          <InfoImage image={image} />
          <InfoTitle title={title} price={price} />
          <BtnWrapper>
            <BtnShareFavorite data={data} />
            <BtnAddToCard data={data} />
          </BtnWrapper>
          <InfoDescription description={description} />
          <Reviews />
        </Wrapper>
      </Container>
    </ScrollView>
  );
};

const Wrapper = styled(View)`
  width: 100%;
`;
const BtnWrapper = styled(View)`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
`;
