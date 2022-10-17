import React, { useState } from "react";
import { Switch } from "@rneui/themed";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { themeChange, themeReselect } from "../store";
import styled from "styled-components";
import { Container } from "../style";

export const Settings = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const themes = useSelector(themeReselect);

  const toggleSwitch = () => {
    if (checked) {
      setChecked(false);
      dispatch(themeChange());
    } else {
      setChecked(true);
      dispatch(themeChange());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title themes={themes}>{`Change to ${
          !checked ? "dark" : "light"
        } theme`}</Title>
        <Switch
          color="#1CD760"
          value={checked}
          onValueChange={() => toggleSwitch()}
        />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled(Text)<{ themes: any }>`
  font-size: 27px;
  font-weight: bold;
  color: ${(props) => props.themes.tint};
`;
