import { ScrollView, SafeAreaView } from "react-native";
import { Card } from "../components/Card";
import styled from "styled-components";
import { FC } from "react";
import { datas } from "../data";
import { Container } from "../style";

interface HomeProps {
  navigation?: any;
}

export const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <Wrapper>
      <ScrollView>
        <Container>
          {datas.map((data) => (
            <Card key={data.id} navigation={navigation} data={data} />
          ))}
        </Container>
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled(SafeAreaView)`
  height: 100%;
`;
